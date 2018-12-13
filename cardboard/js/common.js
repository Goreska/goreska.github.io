$(function() {

	$('.making-slider').slick({
  		slidesToShow: 1,
    	slidesToScroll: 1,
    	arrows: false,
    	fade: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<button type="button" class="prev"></button>',
            nextArrow: '<button type="button" class="next"></button>'
          }
        }
      ],
  		asNavFor: '.making-slider-small'
	});

	$('.making-slider-small').slick({
  		slidesToShow: 4,
 		  slidesToScroll: 1,
  		asNavFor: '.making-slider',
  		arrows: true,
  		prevArrow: '<button type="button" class="prev"></button>',
  		nextArrow: '<button type="button" class="next"></button>',
  		focusOnSelect: true
	});

	$('.reviews-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button type="button" class="reviews-arrow-p"></button>',
  	nextArrow: '<button type="button" class="reviews-arrow-n"></button>',
  	focusOnSelect: true,
    responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
	});

});
