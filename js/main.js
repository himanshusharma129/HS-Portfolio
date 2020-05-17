$(document).ready(function () {
    var nav = $('navbar');
  var navHeight = nav.outerHeight();
    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        //var target = $(this).attr("href"); // Set the target as variable
            
        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        // $('html, body').stop().animate({
        //         scrollTop: $(target).offset().top
        // }, 600, function() {
        //         location.hash = target; //attach the hash (#jumptarget) to the pageurl
        // });

        // return false;
        $('html, body').animate({
            scrollTop: (target.offset().top - navHeight + 5)
        }, 1000, "easeInOutExpo");
        return false;
});
});

$(window).scroll(function() {
var scrollDistance = $(window).scrollTop();

// Show/hide menu on scroll
//if (scrollDistance >= 850) {
//		$('nav').fadeIn("fast");
//} else {
//		$('nav').fadeOut("fast");
//}

// Assign active class to nav links while scolling
$('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
                $('.navnav a.active_nav').removeClass('active_nav');
                $('.navnav a').eq(i).addClass('active_nav');
        }
});








    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 40;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();
    document.querySelector('#hireme').addEventListener('click',function(){
        alert('Not Available for hiring at the moment');
    });

    document.querySelector('#getCV').addEventListener('click',function(){
        window.open('https://drive.google.com/open?id=1f1uJhVH7MqhW-4hH-FKVSEmSU6E67EMr');
        
    });


    document.querySelector('#downCV').addEventListener('click',function(){
        window.open('https://drive.google.com/uc?export=download&id=1f1uJhVH7MqhW-4hH-FKVSEmSU6E67EMr')
   
    });

      // Closes responsive menu when a scroll trigger link is clicked
	$('.navbar-nav>li>a').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	}); 


}).scroll();

