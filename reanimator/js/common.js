$(document).ready(function() {
    
    	$(".owl-carousel").owlCarousel({
        loop : true,
        responsive : {
            0 : {
                items : 1,
                nav : true
            }
        },
        navText : ""
    });
    

    $(document).ready(function() {
        
        $(".s_menu .small_menu").click(function() {
            $(".nav_top_menu ul").slideToggle(500);
        });
    });
    
     $(document).ready(function() {
        
        $(".s_menu .small_uslugi").click(function() {
            $(".main_cat").slideToggle(500);
        });
    });
    
    
    
    //Каруселька
    $.stellar({
        responsive: true
    });

    //Всплывающие окна
    $(".popup_c").magnificPopup();
    
    //Скрипт для меню  услуг, открывается по щелчку
    $(".mc_item_wrap ul").each(function() {
    $(this).after("<div class='mc_item_wrap_af'></div>");
    });
        $(".mc_toggle").click(function() {
            if($(this).parent().parent().children("ul").is(":visible")) {
                $(this).parent().parent().children("ul").slideUp();
                  $(this).parent().parent().children(".mc_item_wrap_af").hide();
            } else {
                $("body .mc_wrap .mc_item_wrap > ul, mc_item_wrap_af").hide();
                $("mc_item_wrap").removeClass("active");
                $(this).parent().parent().addClass("active");
                $(this).parent().parent().children("ul").slideDown();
                $(this).parent().parent().children(".mc_item_wrap_af").show();  
            }
    });

     $(document).ready(function(){
$('a[href*=#]').bind("click", function(e){
var anchor = $(this);
$('html, body').stop().animate({
scrollTop: $(anchor.attr('href')).offset().top
}, 1000);
e.preventDefault();
});
return false;
});
     

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//equalheight - одинаковая высота колонок
	//Пример списка элементов:
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".element"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});

	//Masked Input Plugin
	//Документация: http://digitalbush.com/projects/masked-input-plugin/
	//$("#date").mask("99/99/9999", {placeholder : "mm/dd/yyyy"});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		}
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});
	//Скролл до id, указанного в hash URL
	var elem = window.location.hash;
	if(elem) {
		$.scrollTo(elem, 800, {
			offset: -90
		});
	};




	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
        var ths = $(this);
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоро мы с вами свяжемся:)");
			setTimeout(function() {
			    var magnificPopup = $.magnificPopup.instance;
			    magnificPopup.close();
                ths.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
});

// Адаптивные скрипты, которые срабатывают только при определенном разрешении экрана
// Документация: https://github.com/maciej-gurban/responsive-bootstrap-toolkit
(function($, document, window, viewport) {
	function resizeWindow() {
		// $("a").click(function() {
		// 	if (viewport.is("lg")) {
		// 		return false;
		// 	};
		// });
};
$(document).ready(function() {
	resizeWindow();
});
$(window).bind("resize", function() {
	viewport.changed(function(){
		resizeWindow();
	});
});

$(window).load(function() {
    $(".logo_wrap").animated("zoomInUp", "zoomInUp");
     $("body h1").animated("zoomInUp", "zoomInUp");
      $(".main_cats h2").animated("fadeInLeft", "fadeOutLeft");
     $(".content_bg h2").animated("fadeInRight", "fadeOutRight");
     $(".contacts h2").animated("fadeInLeft", "fadeOutLeft");
     $(".content_bg p").animated("zoomInUp", "fadeOutLeft");
     $(".container .solution").animated("tada", "fadeOutLeft");
        
});
})(jQuery, document, window, ResponsiveBootstrapToolkit);


