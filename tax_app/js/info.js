$(document).ready(function(){
	var $event = "click";
	if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
		$event = "touchstart";
	}
	
	$('.filter-swither-item').on($event, function () {
		$(this).parents('.filter-switcher').find('.filter-swither-item').removeClass('_active');
 		$(this).addClass('_active');
 	});
 
 	$(window).on("scroll", function () {
 		if ($('body').width() > 769 ){
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
		

	$('.mobile-menu-open-link').on($event, function () {

		if ($( ".mobile-menu-wrapper" ).hasClass("_opened")){
			$( ".mobile-menu-wrapper" ).animate({left: "-50%"}, 500);
			$( ".mobile-menu-wrapper" ).removeClass('_opened');
		} else {
			$( ".mobile-menu-wrapper" ).animate({ left: "0"});
			$( ".mobile-menu-wrapper" ).addClass('_opened');
		}
	});	

	$('.select-block-item_car').hover(function(){
		$(this).find('.select-block-item_popup').fadeIn();
	}, function(){
		$(this).find('.select-block-item_popup').hide();
	});

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('.phone-num').each(function (k, v) {
			$(v).attr('href', 'tel:' + $(v).attr('data-href'));
		});
	}

	$(window).touchwipe({
		wipeLeft: function() {
			// Close
			closeMenu();
			
		},
		wipeUp: function() {
			// Close
			closeMenu();
			
		},
		wipeDown: function() {
			// Close
			closeMenu();
			
		},
		/*wipeRight: function() {
			// Open
			$.sidr('open', 'sidr');
		},*/
		preventDefaultEvents: false
	});

});

var closeMenu = function () {
	if ($( ".mobile-menu-wrapper" ).hasClass("_opened")){
		$( ".mobile-menu-wrapper" ).animate({left: "-50%"}, 500);
		$( ".mobile-menu-wrapper" ).removeClass('_opened');
	} 
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