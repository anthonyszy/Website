$(document).ready(function() {
    $('#fullpage').fullpage({
		sectionsColor: ['transparent', 'transparent', 'transparent'],
		anchors:['firstSection', 'secondSection', 'thirdSection'],
		menu: '.main-nav ul',
	});
});

$(function(){
  $("#menu-button").on("click", function(){
    $("#menu-container").fadeToggle();
  });
})
