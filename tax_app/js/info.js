$(document).ready(function(){
	
	$('#mobile-top-menu-link').sidr({
		side: 'left',
		displace: false
	});
	$('#mobile-bottom-menu-link').sidr({
		side: 'left',
		displace: false
	});
	$('#mobile-top-menu-link-internal').sidr({
		side: 'left',
		displace: false
	});
	$('#mobile-bottom-menu-link-internal').sidr({
		side: 'left',
		displace: false
	});

	$('body').touchwipe({
		wipeLeft: function() {
			// Close
			$.sidr('close', 'sidr');
			console.log('close');
		},
		wipeRight: function() {
			// Open
			$.sidr('open', 'sidr');
		},
		preventDefaultEvents: false
	});

	addInfoPageEvents();
});

var addInfoPageEvents = function () {
	$('.filter-swither-item').on("click", function () {
		$(this).parents('.filter-switcher').find('.filter-swither-item').removeClass('_active');
		$(this).addClass('_active');
	});

	$(window).on("scroll", function () {
		if ($('body').width() > 600 ){
			var $mainBlock = $('.page-header');
			if (!$mainBlock.isOnScreen()) {
				$('.settings-block').addClass('fixed-section');
				$mainBlock.addClass('fixed-menu-under-block');
			} else {
				$('.settings-block').removeClass('fixed-section');
				$mainBlock.removeClass('fixed-menu-under-block');
			}
		}
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