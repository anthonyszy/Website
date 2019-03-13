$(document).ready(function() {
    $('#fullpage').fullpage({
		sectionsColor: ['transparent', 'transparent', 'transparent'],
		anchors:['Mercedes-Benz', 'DLAPiper', 'Met-Police'],
		menu: '.main-nav ul',

            easingcss3: 'cubic-bezier(0.645, 0.045, 0.664, 1)'
	});
});

$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});

// $(elem).css('position', 'static');
//   setTimeout(function() {
//     $(elem).css('position', 'fixed');
//   }, 1);

// $(function(){
//   $("#menu-button").on("click", function(){
//     $("#menu-container").slideToggle();
//   });
// })




// $( "#menu-button" ).on ("click", function() {
//   $( "#menu-container" ).slideToggle( "slow", function() {
//   });
//   // $( ".menu" ).active();
//   // });
// });
//

//
// $.fn.slideFadeToggle = function(speed, easing, callback) {
//     return this.animate({
//         opacity: 'toggle',
//         height: 'toggle'
//     }, speed, easing, callback);
// };
//
//
// $( "#menu-button" ).on ("click", function() {
//     $( "#menu-container" ).slideFadeToggle( "slow", function() {
//       $( ".menu" ).delay( 2000 ).slideFadeToggle( 1000 );
// });
// });
// });


// $( "#menu-button" ).click(function() {
// $( ".menu" ).toggle( 300 ).delay( 300 ).fadeIn( 400 );
// $( "#menu-container" ).slideToggle( 400 );
// });





$("#nav-icon3 ").click(function() {
  $('.menu-container').toggleClass('transform-active');
  $('.menu-item').toggleClass('transform-active');
});


$(document).ready(function(){
  $('.preloader').toggleClass('transform-active');
  $('.logo').toggleClass('transform-active');
  $('.bgimg').toggleClass('transform-active');
});


$("#nav-icon3").click(function() {
  $('.logo-container').toggleClass('transform-active');
  $('.about-button').toggleClass('transform-active');
  $('.background-fixed').toggleClass('transform-active');
});


// $(window).loaded(function() {
//         $('preloader').removeClass('transform-active');
// })';


// $(function() {
//   $('#body').addClass('loaded');
// });

$(document).ready(function() {
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 2300);
});


// $('.intro-container').each(function(i){
//   setTimeout(function(){
//     $('.intro-container').eq(i).addClass('is-visible');
//   }, 200 * i);
// });


// AOS.init({
//   duration: 1200,
// });


// var menuButton = document.querySelector('#menu-button');
// var items = document.querySelectorAll('.menu-container');
//
// // get vendor transition property
// var docElemStyle = document.documentElement.style;
// var transitionProp = typeof docElemStyle.transition == 'string' ?
//     'transition' : 'WebkitTransition';
//
// menuButton.onclick = function() {
//   for ( var i=0; i < items.length; i++ ) {
//     var item = items[i];
//     // stagger transition with transitionDelay
//     item.style[ transitionProp + 'Delay' ] = ( i * 50 ) + 'ms';
//     item.classList.toggle('is-moved');
//   }
// };



// $('#menu-button').click(function () {
//         $('#menu-container').slideToggle("slow", function() {
//             // $('.menu').fadeToggle("slow", function() {
//             //   // $('.menu').animate({ transform: '1' }, 800, function() {
//                 // });
//             });
//         });


// $('#menu-button').click(function () {
//         $('#menu-container').slideToggle("slow", function() {
//             $('.menu').fadeTo( "slow", function() {
//
//                 });
//             });
//         });

// $( '.menu' ).fadeTo( "slow", 0.33 () {


// $( "#menu-button" ).on ("click", function() {
//   $( ".menu" ).fade( "slow", function() {
//     // Animation complete.
//   });
// });

//
//
// $( "#menu-button" ).on ("click", function() {
//   $( "#menu-container" ).slideToggle('2000', "easeOutBack", function() {
//     // Animation complete.
//   });
// });



  //
  // $("#menu-container").on ("show", function(){
  //   $("#menu").animate({
  //     opacity: '0.5',
  //   });
  // });
