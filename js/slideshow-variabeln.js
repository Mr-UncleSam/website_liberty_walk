// JavaScript Document

    // You can also use "$(window).load(function() {"
    $(function () {

      // Slideshow 1
      $("#slider1").responsiveSlides({
        auto: false,	//autoplay true= ja, false = nein
        pager: true,	//dies ist die pagination (runde navi elemente unterhalb bild, true=vorhanden, false = nicht vorhanden
        nav: true,
        speed: 500,
        maxwidth: 1000000,		//max breite des bildes!!
        namespace: "centered-btns"	//im css beschriebene class, die angewendet wird
      });


    });
