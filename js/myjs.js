var main = function () {
		
        /* loading content of page not visible in the startup screen */
        
                        
		var animationtime = 200;
        /*var height = $(".maintextgroup .currentabout").height();
        $("#kepem").css({"height" : height});*/
    
      
    
		$("#clickpublications").click(function () {
			$(this).addClass('active'); $('#clickabout').removeClass('active'); $('#clickhiking').removeClass('active');
			$(".maintextgroup .currentabout").slideUp(animationtime);            
            $("#publications").slideDown(animationtime);    
            $("#about").slideUp(animationtime);
            $("#hiking").slideUp(animationtime);
		    $(".footer > .container").attr("id","szeles");			
            $(".maintextgroup .nav span").hide(animationtime);            
		});
		
		$("#clickabout").click(function () {
            $(this).addClass('active'); $('#clickpublications').removeClass('active'); $('#clickhiking').removeClass('active');
		    $(".maintextgroup .currentabout").slideDown(animationtime);            
            $("#about").slideDown(animationtime);
            $("#publications").slideUp(animationtime);
            $("#hiking").slideUp(animationtime);
			$(".footer > .container").attr("id","");
            $(".maintextgroup .nav").hide();            
            $(".maintextgroup .container").css({"padding-bottom" : "20px","padding-top" : "20px"});
		});
        
        $("#clickhiking").click(function () {
            $(this).addClass('active'); $('#clickpublications').removeClass('active'); $('#clickabout').removeClass('active');			
        	$(".maintextgroup .currentabout").slideUp(animationtime);  
            $(".maintextgroup .container").css({"padding-bottom" : "0px","padding-top" : "0px"});
            $(".maintextgroup .nav").show();
            $(".maintextgroup .nav span").show(animationtime); 
	        $("#about").slideUp(animationtime); 
	        $("#publications").slideUp(animationtime);  
	        $(".footer > .container").attr("id","szeles");             
	        $("#hiking").slideDown(animationtime);
            $("#hawaiihikepics").load("hawaiihikepics.html");
            $("#arizonahikepics").load("arizonahikepics.html");
            $("#otherhikepics").load("otherhikepics.html");
        });
       
       
        $(".fancybox").fancybox();   
    
     
 
    
        $(window).load(function() {
		  // Animate loader off screen
          $(".se-pre-con").fadeOut("slow");
          $("#publications").load("publications.html");
          $("#hiking").load("hiking.html");
            $("#clickjapanhikes").click(function () { 
                $("#japanhikepics").slideDown(animationtime); 
                $("#hawaiihikepics").slideUp(animationtime);
                $("#arizonahikepics").slideUp(animationtime);  
                $("#otherhikepics").slideUp(animationtime);  
            });
            $("#clickarizonahikes").click(function () { 
                $("#arizonahikepics").slideDown(animationtime);  
                $("#japanhikepics").slideUp(animationtime); 
                $("#hawaiihikepics").slideUp(animationtime);                
                $("#otherhikepics").slideUp(animationtime);  
            });
            $("#clickotherhikes").click(function () {
                $("#otherhikepics").slideDown(animationtime);  
                $("#japanhikepics").slideUp(animationtime); 
                $("#hawaiihikepics").slideUp(animationtime);
                $("#arizonahikepics").slideUp(animationtime);                  
            });
            $("#clickhawaiihikes").click(function () {
                $("#hawaiihikepics").slideDown(animationtime);                                       
                $("#japanhikepics").slideUp(animationtime);                 
                $("#arizonahikepics").slideUp(animationtime);  
                $("#otherhikepics").slideUp(animationtime);  
            });
	    });
    
  };
                                 

$(document).ready(main);
    