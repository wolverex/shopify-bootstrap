$(function() {
	
	jQuery(window).load(function(){
	  if ( $('.slides li').size() > 1 ) {
	    $('.flexslider').flexslider({
	      animation: "slide",
	      slideshow: true,
	      animationDuration: 700,
	      slideshowSpeed: 6000,
	      controlsContainer: ".flex-controls",
	      controlNav: false,
	      keyboardNav: true
	    }).hover(function(){ $('.flex-direction-nav').fadeIn();}, function(){$('.flex-direction-nav').fadeOut();});
	}
	});
});