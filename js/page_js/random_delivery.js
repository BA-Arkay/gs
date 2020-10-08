(function ($) {
	$(document).ready(function () {
		$(document).on('click', '#autoGenRefID', function () {
			if ($('#refference_no').prop('disabled')) {
				alert('Ref no. already has been generated. Please reload first to generate it again.');
				return false;
			} else {
				var d = new Date();
				ref = d.getTime();
				$('#refference_no').val(ref).prop('readonly', true);
				$('form#random_delivery').submit();
			}
		});

		$(document).on('click', '#autoGenRefTimestamp', function () {
			if ($('#refference_no').prop('disabled')) {
				alert('Ref no. already has been generated. Please reload first to generate it again.');
				return false;
			} else {
				ref = formatDateTime();
				$('#refference_no').val(ref).prop('readonly', true);
				$('form#random_delivery').submit();
			}
		});

		$(document).on('submit', 'form#random_delivery', function (e) {
			e.preventDefault();
			var submitBtn = $(this).find('button[type=submit]'),
				reff_no = $(this).find('input#refference_no'),
				roll_no = $(this).find('input#roll_no');

			if (reff_no.val().length > 0) {
				// reff_no.prop('disabled',true);
				// roll_no.prop('disabled',false).focus();

				if (roll_no.val().length > 0) {
					$.ajax({
						url: API_URL + "/random_delivery/create_delivery_item",
						type: "post",
						cache: false,
						// async: false,
						data: {
							roll_no: roll_no.val(),
							ref_no: reff_no.val(),
						},
						dataType: ajax_data_type,
						beforeSend: function () {
							roll_no.prop('disabled', true);
							submitBtn.prop('disabled', true).html('<i class="fa fa-spinner fa-spin"></i> Loading...');
						},
						success: function (data) {
							let alert_obj = {
								message_type: '',
								message: data.message,
								id: '#flashMsg'
							}
							console.log(data);
							if (data.success) {
								delivery_tr(data)
								$("#confirmDelivery").prop('disabled', false);
								alert_obj.message_type = 'success';
							}
							else{
								alert_obj.message_type = 'danger';
							}
							alertMessagePro(alert_obj);
						},
						error: function (data) {
							console.log(data);
						},
						complete: function () {
							roll_no.prop('disabled', false).val('').focus();
							submitBtn.prop('disabled', false).html('Submit');
							console.info('ajax req completed!')
						}
					});
				} else {
					console.log('creating delivery');

					$.ajax({
						url: API_URL + '/random_delivery/create_delivery',
						data: { ref_no: reff_no.val() },
						dataType: ajax_data_type,
						type: 'post',
						cache: false,
						// async: false,
						success: function (res) {
							if (res.success) {
								reff_no.prop('disabled', true);
								roll_no.prop('disabled', false).focus();
							} else {
								reff_no.val('');
							}
							console.log(res);
							alertMessagePro({
								message_type: 'success',
								message: res.message,
								id: '#flashMsg'
							});
						},
						error: function () {
							reff_no.val('');
							console.log('error');
							alertMessagePro({
								message_type: 'warning',
								message: 'Please scan barcode or input Roll number.',
								id: '#flashMsg'
							});
						}
					});

				}
			} else {
				alertMessagePro({
					message_type: 'warning',
					message: 'Please scan barcode or input Reference number.',
					id: '#flashMsg'
				});
			}
		});

		$(document).on('click', 'button#confirmDelivery', function () {
			let reff_no = $('input#refference_no').val();
			$.ajax({
				url: API_URL + '/random_delivery/confirm_delivery',
				data: {
					"ref_no": reff_no
				},
				type: 'post',
				dataType: ajax_data_type,
				success: function (response) {
					console.log(response);
					if (response.success) {
						response.message_type = 'success';
						$("#reff_no").prop('disabled', false).focus();
						$("#reff_no").val("");
						$("#roll_no").prop('disabled', true);

						// $("#item_list tbody").addClass('d-none');
						$('button#confirmDelivery').addClass('d-none');
					}
					else {
						response.message_type = 'warning';
					}
					response.id = '#flashMsg';
					alertMessagePro(response);
				}
			})
		})
	});
})(jQuery)

function delivery_tr(data) {
	let tr = `<tr>
				<td>${data.data.item}</td>
				<td>${data.data.weight}</td>
				<td>#</td>
			</tr>`;

	$("#item_list tbody").prepend(tr);
}