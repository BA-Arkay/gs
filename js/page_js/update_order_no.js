const 	get_primary_info 	= APP_HOST+'available-for-updating-order-no',
		update_url 			= APP_HOST+'update-order-no';

(function($){
	$(document).ready(function(){

		$.get(get_primary_info, function(data){
			$('#available').text(num(data)).counterUp();
			console.log(data);
		});

		$(document).on('click', '#start_updating', function(){
			update();
		});

	});
})(jQuery)


function update()
{
	$.ajax({
		url 		: update_url,
		type 		: 'POST',
		dataType	: 'json',
		beforeSend 	: function(data){
			$(document).find('#start_updating').prop('disabled', true).html(`<i class="fa fa-sync fa-spin"></i> UPDATING...`);
		},
		success 	: function(res){
			$(document).find('#updated').text(Number($(document).find('#updated').text())+res.updated).counterUp();
			$(document).find('#deliveries').text(Number($(document).find('#deliveries').text())+res.deliveries).counterUp();
			$(document).find('#remaining').text(num(res.remaining)).counterUp();
			notify({
				color :'success',
				title : res.msg_html,
				desc : `Available: ${res.available_rows},<br>Updated: ${res.updated},<br>Deliveries: ${res.deliveries},<br>Updating: ${res.updating},<br>Remaining: ${res.remaining}
				`
			});
			if(res.remaining>0)
			{
				update();
			}else{
				$(document).find('#start_updating').prop('disabled', false).html(`UPDATE AGAIN`);
				alert('COMPLETED');
			}
		},
		error 		: function(err){},
		complete 	: function(data){
			// $(document).find('#start_updating').prop('disabled', false).html(`UPDATE AGAIN`);
		}
	});
}

function notify(data)
{
	let color = data.color!=undefined ? data.color : info,
		title = data.title!=undefined ? data.title : 'Notification',
		desc = data.desc!=undefined ? data.desc : null,

		notification = `
		<div class="alert alert-${color}" role="alert">
			<b>${title}</b><br>
			<p>${desc}</p>
		</div>
	`;
	$(document).find('#notifications').prepend('<p style="height:100px;"></p>');
	setTimeout(function(){
		$(document).find('#notifications').prepend(notification);
	},1500);
}