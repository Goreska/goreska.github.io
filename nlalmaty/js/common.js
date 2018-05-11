$(function() {

	$('.carousel').carousel({
 		 interval: 5000,
 		 pause: false,
 		 fade: true
	});

	/*Создаю переменную которая записана на сайте*/
	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
	  	layoutMode: 'fitRows'
	});
	/*Создаю фильтр который привязан к кнопкам, кликает по функции*/
	$('.filter button').on("click", function() {
		var value = $(this).attr('data-name');
		$grid.isotope({
		filter: value
		});
	});

	// Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });

  $('.hamburger').on('click', function() {
        $('.navigation-menu ul').toggle();
      });
});
