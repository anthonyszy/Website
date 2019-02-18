//
// $(document).ready(function() {
// $('#fullpage').fullpage({
//   //options here
//
//   scrollingSpeed: 9000,
//   autoScrolling: true,
//   fitToSection: true,
//   fitToSectionDelay: 5000,
//   easing: 'easeInOutCubic',
//   easingcss3: 'ease',
// });
//
// //methods
// $.fn.fullpage.setAllowScrolling(false);
// });


//

// $('#fullpage').ready(function(){
// 	$.fn.fullpage.setScrollingSpeed(20);
// 	$.fn.fullpage.moveSlideRight();
//         $.fn.fullpage.setScrollingSpeed(7000); //default scrolling speed
// });
//
//
// script
// $(document).ready(function() {
//     $('#fullpage').fullpage({
// 		sectionsColor: ['#0F2980', '#ffd200', '#c1c1c1'],
// 		anchors:['firstSection', 'secondSection', 'thirdSection'],
// 		menu: '.main-nav ul',
// 	});
// });


$(function(){
  $("#menu-button").on("click", function(){
    $("#menu-container").fadeToggle();
  });
})
