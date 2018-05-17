$(function() {

  /*Navigation Fixed*/
      $(window).scroll(function(){
        if ($(window).scrollTop() > 200) {
        $('.navigation').addClass('scroll');
        }
        else {
           $('.navigation').removeClass('scroll')
        }
      });

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

    $(".slowly").on("click", function (event) {
      /*Отменяем стандартную обработку нажатия по ссылке.*/
      event.preventDefault();
      /*Забираем идентификатор блока с атрибута href.*/
      var id = $(this).attr('href'),
      /*Узнаём высоту от начала страницы до блока, на который ссылается якорь.*/
      top = $(id).offset().top;
      /*Анимируем переход на расстояние - top за 1000ms.*/
      $('body,html').animate({scrollTop: top}, 1200);
    });

        $(".slowly").on("click", function (event) {
      /*Отменяем стандартную обработку нажатия по ссылке.*/
      event.preventDefault();
      /*Забираем идентификатор блока с атрибута href.*/
      var id = $(this).attr('form'),
      /*Узнаём высоту от начала страницы до блока, на который ссылается якорь.*/
      top = $(id).offset().top;
      /*Анимируем переход на расстояние - top за 1000ms.*/
      $('body,html').animate({scrollTop: top}, 1200);
    });

});
