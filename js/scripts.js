$(document).ready(function() {
    $('#fullpage').fullpage({
		sectionsColor: ['transparent', 'transparent', 'transparent'],
		anchors:['firstSection', 'secondSection', 'thirdSection'],
		menu: '.main-nav ul',
	});
});

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





$("#menu-button").click(function() {
  $('.menu-container').toggleClass('transform-active');
  $('.menu').toggleClass('transform-active');
});




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
