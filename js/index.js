$(document).ready(function(){
	$('.triangle').click(function(){
		$(this).toggleClass('is-active');
		$('.nav').toggleClass('is-active');
	});
});
