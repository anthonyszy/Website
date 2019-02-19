$(document).ready(function() {
    $('#fullpage').fullpage({
		sectionsColor: ['#0F2980', '#ffd200', '#c1c1c1'],
		anchors:['firstSection', 'secondSection', 'thirdSection'],
		menu: '.main-nav ul',
	});
});

$(function(){
  $("#menu-button").on("click", function(){
    $("#menu-container").fadeToggle();
  });
})
