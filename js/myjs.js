var main = function () {

        /* loading content of page not visible in the startup screen */


		var animationtime = 200;
        /*var height = $(".maintextgroup .currentabout").height();
        $("#kepem").css({"height" : height});*/

/*
		var contentPages = [];
		var clickFunction = function (content) {
			$(".nav").removeClass('active');
		}
*/

		$("#clickpublications").click(function () {
			$(this).addClass('active'); $('#clickabout').removeClass('active'); $('#clickteaching').removeClass('active');
			$(".maintextgroup .currentabout").slideUp(animationtime);
            $("#publications").slideDown(animationtime);
            $("#about").slideUp(animationtime);
            $("#teaching").slideUp(animationtime);
		  $(".footer > .container").attr("id","szeles");
		});

		$("#clickabout").click(function () {
      $(this).addClass('active'); $('#clickpublications').removeClass('active'); $('#clickteaching').removeClass('active');
		  $(".maintextgroup .currentabout").slideDown(animationtime);
            $("#about").slideDown(animationtime);
            $("#publications").slideUp(animationtime);
            $("#teaching").slideUp(animationtime);
			$(".footer > .container").attr("id","");
		});

    $("#clickteaching").click(function () {
      $(this).addClass('active'); $('#clickpublications').removeClass('active'); $('#clickabout').removeClass('active');
    	$(".maintextgroup .currentabout").slideUp(animationtime);
            $("#teaching").slideDown(animationtime);
            $("#about").slideUp(animationtime);
            $("#publications").slideUp(animationtime);
      $(".footer > .container").attr("id","");

    });


        $(window).load(function() {
		  // Animate loader off screen
          $(".se-pre-con").fadeOut("slow");
          $("#publications").load("publications.html");
          $("#teaching").load("teaching.html");
	    });

  };


$(document).ready(main);
