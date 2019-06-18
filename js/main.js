$(function() {
    /* Declare important variables */
    var allContent = $("#content-1, #content-2, #content-3");
    /* Detect if the logo is already shrank, and srink it if it's not. */
    $(".outsegment").click(function(){
        if ($("#valknut").css("opacity") != "0.5") {
            $("#valknut").css({
            'opacity': '0.5',
            'transform' : 'scale(0.4)',
            'top' : '-25vh',
            });
        }
    });
    
    /* Detect which outer ring of the logo is clicked and choose the page to open. */
    $("#outsegment-1").click(function() {
            allContent.hide().css("opacity", "0");
            $("#content-1").show().css("opacity", "1");
            document.title = "Gallery";
    });
    $("#outsegment-2").click(function() {
            allContent.hide().css("opacity", "0");
            $("#content-2").show().css("opacity", "1");
            document.title = "About Us";
    });
    $("#outsegment-3").click(function() {
            allContent.hide().css("opacity", "0");
            $("#content-3").show().css("opacity", "1");
            document.title = "Contact Us";
    });
    
    /* Display the media logo's when the inner sections of the logo is hovered. */
    $("#twitter_link").hover(function() {
       $("#bg-fade").css("background-image", "url('img/twitter.svg')"); 
	   $("#bg-fade").css("opacity", "1"); 
    }, function() {
        $("#bg-fade").css("background-image", "none")
		$("#bg-fade").css("opacity", "0");
    });
    $("#reddit_link").hover(function() {
       $("#bg-fade").css("background-image", "url('img/reddit.svg')"); 
	   $("#bg-fade").css("opacity", "1"); 
    }, function() {
        $("#bg-fade").css("background-image", "none")
		$("#bg-fade").css("opacity", "0");
    });
    $("#facebook_link").hover(function() {
       $("#bg-fade").css("background-image", "url('img/facebook.svg')"); 
	   $("#bg-fade").css("opacity", "1");
    }, function() {
        $("#bg-fade").css("background-image", "none")
		$("#bg-fade").css("opacity", "0");
    });
    
    /* Display the navigation hints when the outer sections are hovered. */
    $("#outsegment-1").hover(function() {
       $("#bg-fade").css("background-image", "url('img/fury.svg')");
	   $("#bg-fade").css("opacity", "1");	   
    }, function() {
        $("#bg-fade").css("background-image", "none")
		$("#bg-fade").css("opacity", "0");
    });
    $("#outsegment-2").hover(function() {
       $("#bg-fade").css("background-image", "url('img/about.svg')"); 
	   $("#bg-fade").css("opacity", "1");
    }, function() {
        $("#bg-fade").css("background-image", "none")
		$("#bg-fade").css("opacity", "0");
    });
    $("#outsegment-3").hover(function() {
       $("#bg-fade").css("background-image", "url('img/email.svg')"); 
	   $("#bg-fade").css("opacity", "1");
    }, function() {
        $("#bg-fade").css("background-image", "none")
		$("#bg-fade").css("opacity", "0");
    });
    
    /* Gallery Shadow-Box Controls */
    $("#gallery .img-container img").click(function() {
        $("#shadow-box img").attr("src", $(this).attr("src"));
        $("#shadow-box").show();
    })
    $("#shadow-box").click(function() {
        $(this).hide();
    })
});