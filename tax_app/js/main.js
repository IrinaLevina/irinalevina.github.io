$(document).ready(function(){
	$('#anotherCity').select2();
	$('#anotherCityTop').select2();
	$('#mobile-top-menu-link').sidr({
		side: 'left',
		displace: false
	});
	$('#mobile-bottom-menu-link').sidr({
		side: 'left',
		displace: false
	});

	$(window).touchwipe({
		wipeLeft: function() {
			// Close
			$.sidr('close', 'sidr-main');
			console.log('close')
		},
		wipeRight: function() {
			// Open
			$.sidr('open', 'sidr-main');
		},
		preventDefaultEvents: false
	});

	addMainPageEvents();
	addInfoPageEvents();
});

var addMainPageEvents = function () {
	$('.select-block-item').on("click", function () {
		$(this).parents('.select-block').find('.select-block-item').removeClass('_active');
		$(this).addClass('_active');
	});

	$(window).on("scroll", function () {
		if ($('body').width() > 600 ){
			var $mainBlock = $('.top-info-section');
			if (!$mainBlock.isOnScreen()) {
				$('.select-section').addClass('fixed-section');
				$mainBlock.addClass('fixed-menu-under-block');
			} else {
				$('.select-section').removeClass('fixed-section');
				$mainBlock.removeClass('fixed-menu-under-block');
			}
		}
	});
}

var addInfoPageEvents = function () {
	$('.filter-swither-item').on("click", function () {
		$(this).parents('.filter-switcher').find('.filter-swither-item').removeClass('_active');
		$(this).addClass('_active');
	});
}

$.fn.isOnScreen = function(){
    
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
};