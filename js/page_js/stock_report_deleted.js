$(document).ready(function(){
	let url = API_URL;
		url = url.replace(/\/$/, "");
		url = url+'/stock_data';
	// console.log(url);

	$.ajax({
		url 		: url,
		type 		: 'GET',
		dataType 	: 'JSON',
		beforeSend	: function(){
			$(document).find('#StockReportTbl>tfoot').html(	`<tr>
																<td colspan="13">
																	<p class="display-1 text-center text-muted mt-5 mb-5">
																		<i class="fa fa-sync fa-spin"></i>
																	</p>
																</td>
															</tr>`);
		},
		success		: build_primary_tbl,
		error		: function(){},
		complete	: get_more_data_when_completed
	});
});


let build_primary_tbl =function(res){
	let tr=''
		status=false,
		status_msg='',
		total_batches=0,
		total_ready_batches=0,
		total_due_batches=0,
		total_ready_rolls=0,
		total_due_rolls=0,
		total_ready_wt=0,
		total_due_wt=0,
		total_batch_rolls=0,
		total_batch_wt=0,
		total_produced_rolls=0,
		total_produced_wt=0,
		total_floor_rolls=0,
		total_floor_wt=0,
		total_stock_rolls=0,
		total_stock_wt=0;
	$.each(res, function(i,row){
		++total_batches;
		total_batch_rolls += row.batch_rolls;
		total_batch_wt += row.batch_wt;
		total_stock_rolls += row.stock_rolls;
		total_stock_wt += row.stock_wt;
		
		if((row.stock_rolls-row.batch_rolls)>=0 || (row.stock_rolls-row.batch_wt)>=0) 
		{
			++total_ready_batches;
			total_ready_rolls += row.stock_rolls;
			total_ready_wt += row.stock_wt;
			status_msg = `<span class="badge badge-success">READY</span>`;
		}
		else
		{
			++total_due_batches;
			total_due_rolls += row.stock_rolls;
			total_due_wt += row.stock_wt;
			status_msg = `<span class="badge badge-warning">DUE</span>`;
		}

		tr = 	`<tr 
					data-batch_no="${row.batch_no}"
					data-batch_rolls="${row.batch_rolls}"
					data-batch_wt="${row.batch_wt}"
					data-stock_rolls="${row.stock_rolls}"
					data-stock_wt="${row.stock_wt}"
				>
					<td class="text-center">${row.rack_location}</td>
					<td class=""></td>
					<td class=""></td>
					<td class=""></td>
					<td class="">${row.batch_no}</td>
					<td class=""></td>
					<td class="text-right">${num(row.batch_rolls)}</td>
					<td class="text-right">${num(row.batch_wt,2)}</td>
					<td class="text-right">0</td>
					<td class="text-right">0.00</td>
					<td class="text-right">0</td>
					<td class="text-right">0.00</td>
					<td class="text-right">${num(row.stock_rolls)}</td>
					<td class="text-right">${num(row.stock_wt,2)}</td>
					<td class="text-center">${status_msg}</td>
				</tr>`;
		$(document).find('#StockReportTbl>tbody').append(tr);
	});

	let tfoot = `<tr class="bg-dark text-white">
					<th class="text-right" colspan="4">TOTAL BATCHES : </th>
					<th class="text-right">${num(total_batches,0)}</th>
					<th class="text-"></th>
					<th class="text-right">${num(total_batch_rolls,0)}</th>
					<th class="text-">${num(total_batch_wt,2)}</th>
					<th class="text-"></th>
					<th class="text-"></th>
					<th class="text-"></th>
					<th class="text-"></th>
					<th class="text-right">${num(total_stock_rolls,0)}</th>
					<th class="text-right">${num(total_stock_wt,2)}</th>
					<th class="text-"></th>
				</tr>
				<tr>
					<th class="bg-success text-white text-center" colspan="15">
						TOTAL READY BATCHES : <big>${num(total_ready_batches)} </big>&nbsp;|&nbsp;
						Rolls : <big>${num(total_ready_rolls)}</big> pcs. &nbsp;|&nbsp;
						Qty : <big>${num(total_ready_wt,2)}</big> Kg.
					</th>
				</tr>
				<tr>
					<th class="bg-warning text-white text-center" colspan="15">
						TOTAL DUE BATCHES : <big>${num(total_due_batches)}</big> &nbsp;|&nbsp;
						Rolls : <big>${num(total_due_rolls)}</big> pcs. &nbsp;|&nbsp;
						Qty : <big>${num(total_due_wt,2)}</big> Kg.
					</th>
				</tr>`;

	$(document).find('#StockReportTbl>tbody').append(tfoot);
}

let get_more_data_when_completed = function(){
	$(document).find('#StockReportTbl>tfoot').html(null);
	let all_rows = $(document).find('#StockReportTbl>tbody>tr'),
		url = BATCH_INFO_API;

	$.each(all_rows, function(i,row){
		let data = $(row).data();
		// console.log(data);
		// $.ajax({
		// 	url : url+data.batch_no,
		// 	success : function(res){
		// 		console.log(res);
		// 	}
		// });
	});
}