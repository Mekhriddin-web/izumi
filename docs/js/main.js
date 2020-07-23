$(document).ready(function() {
	//header fixed
	$(window).scroll(function(){
		let sticky = $('.header'),
		scroll = $(window).scrollTop();

		if (scroll >= 10) sticky.addClass('header-active');
		else sticky.removeClass('header-active');
	});

	//Burger Menu
	$(".header__burger").on("click", function(event) {
		event.preventDefault();
		$(".header__burger,.nav").toggleClass('active');
		$("body").toggleClass('lock');
	});

	//Slider
	$(".intro__slider").slick({
		arrows: false,
		infinite: true,
		autoplay: true,
		fade: true,
		autoplaySpeed: 2000,
		speed: 1000,
	});

	//Smooth scroll 
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();
		let = blockId = $(this).data('scroll');
		let = blockOffset = $(blockId).offset().top;

		$(".nav,.header__burger").removeClass('active');
		$("body").removeClass('lock');

		$("html, body").animate({
			scrollTop: blockOffset
		}, 1000);
	});

	new WOW().init();
});



