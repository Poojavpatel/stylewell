$(document).ready(function(){
	
	/************************* Scroll to Top ************************************/ 

	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
	        $('#return-to-top').fadeIn(200);    // Fade in the arrow
	    } else {
	        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
	    }
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
	    $('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});

	/************************ BLOCK REVEAL **********************************/

	$("#box1 .colorlayer").animate({left:"0px"},400);
	$("#box1 .colorlayer").delay(400).animate({left:"-100%"},400);
	$("#box1 h2").animate({left:"0px"},400);
	$("#box2 .colorlayer").animate({left:"0px"},400);
	$("#box2 .colorlayer").delay(400).animate({left:"-100%"},400);
	$("#box2 h3").animate({left:"0px"},400);	

	/*********************** Dot Navigation ****************************/

	$('.dotNav ul li').click(function(){
		console.log(this);
		$('.current').removeClass('current');
		$(this).addClass('current');
	})

	/************************** Highlight current page *******************/

  		// $('.dotNav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
  	console.log(location);
  	console.log(location.pathname);
  	console.log(location.pathname.split("/"));
  	console.log(location.pathname.split("/")[1]);

  	/************************** SCROLL EFFECT ON ELEGENT EFFECT *****************************/

  	var controller = new ScrollMagic.Controller();
  	var ourScene = new ScrollMagic.Scene({
  		triggerElement:'#about',
  		triggerHook:'0.75',
  		duration:'65%',
  	})
  	.setTween(TweenMax.from('#elegentbox1', 1, {y:'-20%' , ease:Power0.easeNone}))
  	.addIndicators({
  		name:'arrange',
  		colorTrigger:'yellow',
  		colorStart:'yellow',
  		colorEnd:'yellow'
  	})
  	.addTo(controller);

  	var ourScene = new ScrollMagic.Scene({
  		triggerElement:'#about',
  		triggerHook:'0.75',
  		duration:'65%',
  	})
  	.setTween(TweenMax.from('#elegentbox2', 1, {y:'20%' , ease:Power0.easeNone}))
  	.addIndicators({
  		name:'arrange',
  		colorTrigger:'yellow',
  		colorStart:'yellow',
  		colorEnd:'yellow'
  	})
  	.addTo(controller);

  	var ourScene = new ScrollMagic.Scene({
  		triggerElement:'#about',
  		triggerHook:'0.75',
  		duration:'65%',
  	})
  	.setTween(TweenMax.from('#elegentbox3', 1, {y:'-15%' , ease:Power0.easeNone}))
  	.addIndicators({
  		name:'arrange',
  		colorTrigger:'yellow',
  		colorStart:'yellow',
  		colorEnd:'yellow'
  	})
  	.addTo(controller);

  	var ourScene = new ScrollMagic.Scene({
  		triggerElement:'#about',
  		triggerHook:'0.75',
  		duration:'65%',
  	})
  	.setTween(TweenMax.from('#elegentbox4', 1, {y:'40%' , ease:Power0.easeNone}))
  	.addIndicators({
  		name:'arrange',
  		colorTrigger:'yellow',
  		colorStart:'yellow',
  		colorEnd:'yellow'
  	})
  	.addTo(controller);

  	/****************************** PIN ABOUT US FOR 20% TIME *****************************/

  	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement:'#about',
		duration:'25%',
		triggerHook: '0',
	})
	.setPin('#about',{pushFollowers:true}) /*using pushfollowers the main goes over the header*/
	.addIndicators({
		name:'Pin',
		colorTrigger:'blue',
		indent:0,
		colorStart:'blue',
		colorEnd:'blue'
	})
	.addTo(controller);
  
  /******************************* GALLERY LOAD ON SCROLL ANIMATION *************************/
  var ourScene = new ScrollMagic.Scene({
      triggerElement:'#gallery',
      triggerHook:'0.4',
      duration:'20%',
    })
    .setTween(TweenMax.from('.gallerycontainer img', 1, {y:'50%',opacity:'0', ease:Power0.easeNone}))
    .addIndicators({
      name:'gallery',
      colorTrigger:'black',
      colorStart:'black',
      colorEnd:'black'
    })
    .addTo(controller);  

  /********************************************************************/
  // $(function() {
  //   $(".heart").on("click", function() {
  //     $(this).toggleClass("is-active");
  //   });
  // });


});