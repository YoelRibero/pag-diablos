/* BOTÓN IR ARRIBA */

$(document).ready(function(){

	$('.ir-arriba').click(function(){

		$('body, html').animate({
			scrollTop: '0px'
		}, 1500);

	});

	$(window).scroll(function(){

		if($(this).scrollTop() > 0){
			$('.ir-arriba').slideDown(1500);
		} else{
			$('.ir-arriba').slideUp(1500);
		}

	});

});