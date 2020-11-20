


$(document).ready(function() {
    $('#fullpage').fullpage({
    // anchors: ['Mercedes-Benz', 'ClevelandClinicLondon', 'dlapiper', 'IC24', 'MetPolice', 'Boots', 'JLR', '188Bet', 'SoapBox', 'FindAPet'],
		sectionsColor: ['transparent', 'transparent', 'transparent'],
		menu: '.main-nav ul',
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['Mercedes-Benz', 'Vodafone', 'Just' 'Cleveland Clinic</br>London', 'DLA Piper', 'IC24', 'Met Police', 'Boots', 'Jaguar Land</br>Rover', '188Bet'],
    tooltipsPostion: 'left',
    classChange:'left',
    easingcss3: 'cubic-bezier(0.645, 0.075, 0.33, 1)'
	});
});

// $(document).ready(function(){
// 	$('#nav-icon3').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });


  //  $(document).animateScroll(); {
  // });



$(".projects").click(function() {
  $('.menu-container').toggleClass('transform-active');
  $('.menu-item').toggleClass('transform-active');
  $('.about-button').toggleClass('transform-active');
  $('.logo-container').toggleClass('transform-active');
  $('.background-fixed').toggleClass('transform-active');
  $('.back-button').toggleClass('transform-active');
    $('.project-button').toggleClass('transform-active');
});

$(".back").click(function() {
  $('.menu-container').removeClass('transform-active');
  $('.menu-item').removeClass('transform-active');
  $('.about-button').removeClass('transform-active');
  $('.logo-container').removeClass('transform-active');
  $('.background-fixed').removeClass('transform-active');
  $('.back-button').removeClass('transform-active');
    $('.project-button').removeClass('transform-active');
});

$(document).ready(function(){
  $('.preloader').toggleClass('transform-active');
  $('.logo').toggleClass('transform-active');
  $('.bgimg').toggleClass('transform-active');
  $('.name-container').toggleClass('transform-active');
  $('.featured-projects-container').toggleClass('transform-active');
});

//
// $(document).ready(function(){
//   $('.project-name').toggleClass('transform-active');
// });


// $(document).load(function() {
//       setTimeout(function(){
//       $('body, main').removeClass('loaded');
//   }, 5000);
// });


// $("main").css("overflow", "hidden");
//   setTimeout(function(){
//   }, 2300);
// });
// });

// $(".btn").click(function() {
//   $('.menu-container').removeClass('transform-active');
// });
//
$(".btn").click(function() {
  $('#preloader').addClass('animate');
});

    $(".btn").click(function() {
          $('#preloader').addClass('animate');  // Added px to make it work,
                                         //   or get rid of quotes -500
        var href = $(this).attr('href');

             // Delay setting the location for one second
        setTimeout(function() {window.location = href}, 3000);
        return false;
    });




$(document).ready(function() {
    setTimeout(function(){
        $('#index').addClass('loaded');
    }, 2);
});

$(document).ready(function() {
    setTimeout(function(){
  $('.index-project-name').toggleClass('transform-active');
}, 2);
});


$(document).ready(function() {
    setTimeout(function(){
        $('#about, #project').addClass('loaded');
    }, 10);
});





// $('body').addClass('stop-scrolling')
//
//
// $(document).ready(function() {
// $('body').removeClass('stop-scrolling')
// });






// $(document).ready(function() {
//
//   $(window).scroll(function(event) {
//
//
//       var y = $(this).scrollTop();
//
//         if (y >= 30) {
//
//           $('.project-image-one').addClass('animate');
//
//         }
//
//
//         var y = $(this).scrollTop();
//
//           if (y >= 2000) {
//
//             $('.project-image-two').addClass('animate');
//
//           }
//
//           var y = $(this).scrollTop();
//
//             if (y >= 4000) {
//
//               $('.project-image-three').addClass('animate');
//
//             }
//
//       });
//
//
//     });










// $(".project-name-container").inViewport(function(px){
//     if(px) $(this).addClass("triggeredCSS3") ;
// });






// $(document).ready(function() {
//     setTimeout(function(){
//         $('.section').toggleClass('active');
//     }, 300);
// });



// $('body main').css({
//     'overflow': 'hidden',
//     'height': '100%'
//       setTimeout(function(){
//       $('body, main').removeClass('.css');
//   }, 5000);
// });

//
