function goTo(obj) {
	$('html,body').animate({
		scrollTop: $(obj).offset().top-100	
	}, 1000);
}
$(document).ready(function(e) {
 //    $('.navigation a.scroll').click(function(){
 //    	var id = $(this).attr('href');
	// 	goTo(id);
	// 	return false;	
	// });

    $('.sp-wrap').smoothproducts();
    
	var nav = $('.navigation');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			nav.addClass('menu-fixed');
			$('.navigation .navbar-default .navbar-right > li > a').show();
		} else {
			nav.removeClass('menu-fixed');
			$('.navigation .navbar-default .navbar-right > li > a').hide();
		}
	});
});