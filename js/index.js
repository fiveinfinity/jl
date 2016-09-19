$(document).ready(function(){
	$('.triangle').click(function(){
		$(this).toggleClass('is-active');
		$('.links').toggleClass('is-active');
	});

  $('a').on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });

});
