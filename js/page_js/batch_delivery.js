//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
		/* if present, the header is where you move the DIV from:*/
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		/* otherwise, move the DIV from anywhere inside the DIV:*/
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

(function ($) {
	$(document).ready(function () {

		$(document).on('click', '#autoGenRefID', function () {
			if ($('#ref_no').prop('readonly')) {
				alert('Ref no. already has been generated. \nPlease reload first to generate it again.');
				return false;
			} else {
				var d = new Date();
				ref = d.getTime();
				$('#ref_no').val(ref).prop('readonly', true);
				$('#batch_no').prop('readonly', false).prop('disabled', false).focus();
				// $('form#random_delivery').submit();
			}
		});

		$(document).on('click', '#autoGenRefTimestamp', function () {
			if ($('#ref_no').prop('readonly')) {
				alert('Ref no. already has been generated. \nPlease reload first to generate it again.');
				return false;
			} else {
				ref = formatDateTime();
				$('#ref_no').val(ref).prop('readonly', true);
				$('#batch_no').prop('readonly', false).prop('disabled', false).focus();
				// $('form#random_delivery').submit();
			}
		});


		$(document).on('submit', 'form#batch_delivery', function (e) {
			e.preventDefault();
			var submitBtn = $(this).find('button[type=submit]'),
				ref_no = $(this).find('input#ref_no'),
				batch_no = $(this).find('input#batch_no'),
				roll_no = $(this).find('input#roll_no');

			let flashMsgObj = {
				message_type: '',
				message: '',
				id: '#flashMsg'
			};

			if (ref_no.val().length > 0) {
				ref_no.prop('readonly', true);
				batch_no.prop('readonly', false).focus();
				if (batch_no.val().length > 0) {
					batch_no.prop('readonly', true);
					if (roll_no.val().length > 0) {
						// console.log(batch_no.val());
						$.ajax({
							url: API_URL + '/delivery/create_delivery_item',
							type: 'post',
							data: {
								ref_no: ref_no.val(),
								batch_no: batch_no.val(),
								roll_no: roll_no.val()
							},
							dataType: ajax_data_type,
							success: function (response) {
								console.log(response);
								flashMsgObj.message = response.message;
								if (response.success) {
									flashMsgObj.message_type = 'success';
									tempIndex(response.data);

									/*scaning vs batch calc   */
									let loadScanQty = $("#loadScanQty").text();
									loadScanQty = parseFloat(loadScanQty);
									loadScanQty += response.data.weight
									$("#loadScanQty").text(loadScanQty.toFixed(2));

									let loadScanRollNum = $("#loadScanRollNum").text();
									loadScanRollNum = parseInt(loadScanRollNum);
									loadScanRollNum += 1;
									$("#loadScanRollNum").text(loadScanRollNum);

									/* reamaining */
									let calcRemainingQty = $("#calcRemainingQty").text();
									calcRemainingQty = parseFloat(calcRemainingQty);
									calcRemainingQty -= response.data.weight;
									$("#calcRemainingQty").text(calcRemainingQty.toFixed(2));

									let calcRemainingRollNum = $("#calcRemainingRollNum").text();
									calcRemainingRollNum = parseInt(calcRemainingRollNum);
									calcRemainingRollNum -= 1;
									$("#calcRemainingRollNum").text(calcRemainingRollNum);

								}
								else {
									flashMsgObj.message_type = 'warning';
								}
								alertMessagePro(flashMsgObj);
							},
							error: function (response) {
								console.log(response);
							},
							complete: function () {
								roll_no.prop('readonly', false).focus();
								roll_no.val("");
								submitBtn.prop('disabled', false).html('submit');
								$("button#confirmDelivery").prop('disabled', false);
							},
							beforeSend: function () {
								submitBtn.prop('disabled', true).html('<i class="fa fa-spinner fa-spin"></i> Loading...');
								roll_no.prop('readonly', true);

							}
						});
					}
					else {
						$.ajax({
							url: API_URL + '/delivery/create_delivery',
							type: 'post',
							data: {
								ref_no: ref_no.val(),
								batch_no: batch_no.val(),
							},
							dataType: ajax_data_type,
							success: function (response) {
								console.log(response);
								flashMsgObj.message = response.message;
								if (response.success) {
									flashMsgObj.message_type = 'success';
									roll_no.prop('readonly', false).val("").focus();

									/*scaning vs batch calc  */
									$("#loadBatchQty").text(Number(response.data.batch_weight).toFixed(2));
									$("#loadBatchRollNum").text(response.data.number_of_items);
									/* reamaining */
									$("#calcRemainingQty").text(Number(response.data.batch_weight).toFixed(2));
									$("#calcRemainingRollNum").text(response.data.number_of_items);
									$('#mydiv').removeClass('d-none');
								}
								else {
									batch_no.prop('readonly', false).val("").focus();
									flashMsgObj.message_type = 'warning';
								}
								alertMessagePro(flashMsgObj);
							},
							error: function (response) {
								console.log(response);
							},
							complete: function () {
								submitBtn.prop('disabled', false).html('submit');
							},
							beforeSend: function () {
								submitBtn.prop('readonly', true).html('<i class="fa fa-spinner fa-spin"></i> Loading...');
								batch_no.prop('readonly', true);
							}
						});
					}
				}
				else {
					// 
				}

			} else {
				alertMessagePro({
					message_type: 'warning',
					message: 'Please scan barcode or input Reference number.',
					id: '#flashMsg'
				});
			}
		});

		$(document).on('click', 'button#confirmDelivery', function (e) {
			let ref_no = $('input#ref_no').val();
			$.ajax({
				url: API_URL + '/delivery/confirm_delivery',
				data: {
					"ref_no": ref_no
				},
				type: 'post',
				dataType: ajax_data_type,
				success: function (response) {
					console.log(response);
					if (response.success) {
						response.message_type = 'success';
					}
					else {
						response.message_type = 'warning';
					}
					response.id = '#flashMsg';
					alertMessagePro(response);
				},
				complete: function () {
					$("#roll_no").prop('readonly', true);
					$("button#confirmDelivery").prop('disabled', true).html('<i class="fa fa-truck"></i> Delivred');
				},
				beforeSend: function () {
					$("button#confirmDelivery").prop('disabled', true).html('<i class="fa fa-spinner fa-spin"></i> Loading...');
				}
			})
		});
	});
})(jQuery)

function tempIndex(item) {
	let item_info = JSON.parse(item.item_detail)
	let tr = `<tr>
					<td>${item.item ? item.item : 'UNDEFINED'}</td>
					<td>${item.weight ? item.weight : '00.00'}</td>
					<td>${(item.location == 'ds-dr-ds-db' ? 'Floor' : item.location)}</td>
					<td>${item_info.order_no}</td>
					<td>${item_info.buyer_name}</td>
				</tr>`;
	$("#delivered_roll_table tbody").prepend(tr);
}