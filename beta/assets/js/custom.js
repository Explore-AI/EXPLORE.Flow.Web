(function ($) {
	'use strict';
  $('.toggle-menu').on('click', function(){
     $(this).toggleClass("active");
     $('.head-menu').slideToggle();
      $('body').toggleClass("scroll-hide");
  });

  $('.head-menu .drop-menu').on('click', function() {

    if( $(this).hasClass('active')) {
      $('.head-menu .drop-menu').removeClass("active");
        $('.head-menu ul.sub-menu').slideUp();
    }else{
      $('.head-menu .drop-menu').removeClass("active");
    $(this).addClass("active");
    jQuery('.head-menu ul.sub-menu').slideUp();
    $(this).next().slideDown();

    }

  }); 

		
}(jQuery));


$('.gallery-slider').owlCarousel({
  autoplay: true,
  loop:true,
  items: 1,
  nav:true,
  dots: true
})