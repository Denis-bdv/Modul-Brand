// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('.back-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('.back-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  $('.back-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
  });


  // page init
jQuery(function(){
	initTabs();
});
  // content tabs init
function initTabs() {
	jQuery('.team').contentTabs({
		autoHeight: true,
		animSpeed: 300,
		effect: 'fade',
		tabLinks: 'a',
		event: 'mouseenter'
	});
	jQuery('ul.slide-tabset').contentTabs({
		addToParent: true,
		animSpeed: 500,
		effect: 'slide',
		tabLinks: 'a'
	});
	jQuery('ul.multi-tabset').contentTabs({
		tabLinks: 'a'
	});
}