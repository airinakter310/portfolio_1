$(document).ready(function () {
	$(".service_slide").slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		centerMode:false,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		autoplay: true
		
	  });
  jQuery(window).scroll(function () {
	  var top = jQuery(document).scrollTop();
		var height = 30;
	  //alert(batas);
	  
	  if (top > height) {
		jQuery('.navbar-fixed-top').addClass('menu-scroll');
	  } else {
	   jQuery('.navbar-fixed-top').removeClass('menu-scroll');
	  }
	});	

  //<!-- =============================================== -->
//<!-- ========== bootstrap scrollspy ========== -->
//<!-- =============================================== -->
    
    
$('body').scrollspy({
  target: '.navbar',
  offset: 160
});

//<!-- =============================================== -->
//<!-- ========== navbardown.js ========== -->
//<!-- =============================================== -->

$('.nav a').bind('click', function () {
$('html , body').stop().animate({
    scrollTop: $($(this).attr('href')).offset().top - 80
}, 1500, 'easeInOutExpo');
event.preventDefault();
});			
  
});

$(".circle_percent").each(function() {
    var $this = $(this),
		$dataV = $this.data("percent"),
		$dataDeg = $dataV * 3.6,
		$round = $this.find(".round_per");
	$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
	$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
	$this.prop('Counter', 0).animate({Counter: $dataV},
	{
		duration: 2000, 
		easing: 'swing', 
		step: function (now) {
            $this.find(".percent_text").text(Math.ceil(now)+"%");
        }
    });
	if($dataV >= 51){
		$round.css("transform", "rotate(" + 360 + "deg)");
		setTimeout(function(){
			$this.addClass("percent_more");
		},1000);
		setTimeout(function(){
			$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
		},1000);
	} 
});
new WOW().init();