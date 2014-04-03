$(document).ready(function(){
	//Page setup
	var w = $(document).height();		
	$("#header").css("min-height", w*0.05+'px');
	$("#content").css("min-height", w*0.67+'px');
	$("#footer").css("min-height", w*0.05+'px');	
	
	$('.button.cancel').click(function(){
		$('.modal').modal('hide');
	});
});

