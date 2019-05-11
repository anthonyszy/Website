$(document).ready(function() {
    $('#fullpage').fullpage({
		sectionsColor: ['transparent', 'transparent', 'transparent'],
		menu: '.main-nav ul',

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

$(document).ready(function() {
    setTimeout(function(){
        $('#index').addClass('loaded');
    }, 2700);
});

$(document).ready(function() {
    setTimeout(function(){
  $('.index-project-name').toggleClass('transform-active');
}, 2600);
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
