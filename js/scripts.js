$(document).ready(function() {
    $('#fullpage').fullpage({
		sectionsColor: ['transparent', 'transparent', 'transparent'],
		// anchors:['Mercedes-Benz', 'DLAPiper', 'Met-Police'],
		menu: '.main-nav ul',

            easingcss3: 'cubic-bezier(0.645, 0.045, 0.80  , 1)'
	});
});

// $(document).ready(function(){
// 	$('#nav-icon3').click(function(){
// 		$(this).toggleClass('open');
// 	});
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

});


// $(window).scroll(function(){
//   $('.project-name').toggleClass('transform-active');
// });



$(document).ready(function() {
    setTimeout(function(){
        $('body, main').addClass('loaded');
    }, 2300);
});
