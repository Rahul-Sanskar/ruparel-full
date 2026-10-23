 // Hero Area
$('.hero-new').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: false,
  speed: 500,
  fade: true,
  pauseOnHover:true,
  cssEase: 'linear',
});

$('.sliderHeroTabs6').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 300,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});




//Award 
$('.award-slider').slick({
  dots: false,
  infinite: true,
  arrows:true,
  speed: 300,
  slidesToShow: 3,
  pauseOnHover:true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//Blog
$('.blog-slider').slick({
  dots: false,
  infinite: true,
  arrows:true,
  speed: 300,
  slidesToShow: 3,
  pauseOnHover:true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// MENU
$(document).ready(function(){
    $(".button span").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);   
    $(".button span").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});



// ISOTOPE FILTER
	var $container = $('.works ul');
	$container.isotope({
	filter: '*',
	animationOptions: {
	duration: 750,
	easing: 'linear',
	queue: false
	}
	});

	$('.works-filter li a').on('click', function(e) {
	$('.works-filter li a.current').removeClass('current');
	$(this).addClass('current');

	var selector = $(this).attr('data-filter');
	$container.isotope({
		filter: selector,
		animationOptions: {
		duration: 750,
		easing: 'linear',
		queue: false
		}
	});
	return false;
	}); 

	// COUNTER 
	if (!document.getElementById("counter")) {
	} 
	else {

	var lastWasLower = false;
		$(document).scroll(function(){

		var p = $( "#counter" );
		var position = p.position();
		var position2 = position.top;

		if ($(document).scrollTop() > position2-300){
		if (!lastWasLower)
			$('#1').html("21");
			$('#2').html("37");
			$('#3').html("78");

		lastWasLower = true;
			} else {
		lastWasLower = false;
		}
		});		
	}



function onNumkey(e){var n=[8,9,46].includes(e.keyCode),t=isNaN(e.key);0==n&&(1==t?e.preventDefault():$(e.currentTarget).val().length>1&&e.preventDefault())}$(window).scroll(function(){var e=$(".offer-fixd");$(window).scrollTop()>=10?e.addClass("fixed"):e.removeClass("fixed")}),$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>500?$("#scroll").fadeIn():$("#scroll").fadeOut()}),$("#scroll").click(function(){return $("html, body").animate({scrollTop:0},600),!1})}),$(".home-slide").slick({dots:!0,autoplay:!0,infinite:!0,speed:100,fade:!0,cssEase:"linear"}),$("input[name=total_son]").length&&$("input[name=total_son]")[0].addEventListener("keydown",onNumkey),$("input[name=total_son]").length&&$("input[name=total_daughter]")[0].addEventListener("keydown",onNumkey),$(".yt-increase a").on("click",function(e){e.preventDefault();var n=$(this).children().attr("class").split(" "),t=$(this).parent().find("input[type=number]").val();(""==t||isNaN(t))&&(t=0),"fa-plus"==n[1]?t=parseInt(t)+1:"fa-minus"==n[1]&&0==(t=parseInt(t)-1)&&(t=1),t>=1&&t<=4&&$(this).parent().find("input[type=number]").val(t)});



// WOW ANIMATION 
	var wow = new WOW(
	{
		animateClass: 'animated',
		offset:       0
	}
	);
	wow.init();


// Cache selectors
var lastId,
 topMenu = $("#tabs-header"),
 topMenuHeight = topMenu.outerHeight()+140,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  console.log('menu item clicked');
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+70;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

// Bind to scroll


      // sticky header
      window.onscroll = function() {myFunction()};

      var header = document.getElementById("header");
      var sticky = header.offsetTop;
      
      function myFunction() {
      if (window.pageYOffset > sticky) {
      header.classList.add("fixed-top");
      } else {
      header.classList.remove("fixed-top");
      }
      }

      

