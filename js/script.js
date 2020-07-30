(function($){
	$(document).ready(function(){

		$(document).on('dragstart','img', function(){
			return false;
		});

		$(document).on('mouseover','[data-toggle=tooltip]', function(){
			$(this).tooltip();
		});
		$('[data-toggle=tooltip]').tooltip();
		$('[data-toggle=popover]').popover();
		$('.special_popover[data-toggle=popover]').popover({
			  container: 'body'
			// , trigger: 'focus'
		});

	});
})(jQuery)