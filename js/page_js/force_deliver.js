const get_batches = APP_HOST+'get-batches-by-order-no',
	force_deliver_url = APP_HOST+'batch-force-deliver';

(function($){
	$(document).ready(function(){
		$(document).on('change', '#order_no', function(){
			loadBatches($(this).val());
		});

		$(document).on('click', '.deliver', function(){
			let conf = confirm('Are you sure?');
			if(conf)
				forceDeliver($(this));
		});

		
	});
})(jQuery)

function loadBatches(order_no)
{
	$.ajax({
		url 		: get_batches,
		type		: 'get',
		dataType	: 'json',
		data 		: {order_no:`${order_no}`},
		beforeSend	: function(data){
			$(document).find('#batches>tbody').html(`
				<tr>
					<td colspan="2">
					<p class="text-center">
						<i class="fa fa-spinner fa-spin fa-4x text-muted"></i><br><br>
						<big class="text-dark">LOADING...</big>
					</p>
					</td>
				</tr>
			`);
		},
		success		: function(res){
			if(res.length>0)
				makeRows(res);
		},
		error		: function(err){},
		complete	: function(data){}
	});
}

function makeRows(data)
{
	console.log(data[0]);
	let tr = '',
		trs = '',
		cls = '',
		txt = '',
		act = '';
	$.each(data, function(i,d){
		txt = d.is_delivered ? 'DELIVERED' : 'DELIVER';
		cls = d.is_delivered ? 'warning' : 'success';
		act = d.is_delivered ? 'disabled' : '';
		tr = `
			<tr>
				<td>${d.batch_no}</td>
				<td>${d.location}</td>
				<td class="text-center">
					<button data-batch-no="${d.batch_no}" class="deliver btn btn-sm btn-${cls}" ${act}>${txt}</button>
				</td>
			</tr>
		`;
		trs+=tr;
	});
	$(document).find('#batches>tbody').html(trs);
}

function forceDeliver(arg)
{
	let batch_no = arg.data('batch-no');

	$.ajax({
		url 		: force_deliver_url,
		type		: 'POST',
		dataType	: 'json',
		data 		: {"batch_no":`${batch_no}`},
		beforeSend	: function(data){
			arg.removeClass('btn-success').addClass('btn-secondary').html(`<i class="fa fa-spinner fa-spin"></i> LOADING...`);
		},
		success		: function(res){
			if(res.success)
				arg.removeClass('btn-secondary').addClass('btn-warning').prop('disabled', true).html(`DELIVERED`);
			else
				arg.removeClass('btn-secondary').addClass('btn-success').prop('disabled', false).html(`DELIVER`);

			console.log(res);
		},
		error		: function(err){},
		complete	: function(data){}
	});
}