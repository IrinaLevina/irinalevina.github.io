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
	$('#mobile-top-menu-link-internal').sidr({
		side: 'left',
		displace: false
	});
	$('#mobile-bottom-menu-link-internal').sidr({
		side: 'left',
		displace: false
	});
	$(window).on("load resize", function () {
		if ($(document).width() > 769 ){
			$('.select-block-item_car').hover(function(){
				$(this).find('.select-block-item_popup').fadeIn();
			}, function(){
				$(this).find('.select-block-item_popup').hide();
			});
		};
	});

	$(window).touchwipe({
		wipeLeft: function() {
			// Close
			$.sidr('close', 'sidr');
			
		},
		wipeUp: function() {
			// Close
			$.sidr('close', 'sidr');
			
		},
		wipeDown: function() {
			// Close
			$.sidr('close', 'sidr');
			
		},
		/*wipeRight: function() {
			// Open
			$.sidr('open', 'sidr');
		},*/
		preventDefaultEvents: false
	});

	addMainPageEvents();
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

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	$('.phone-call').each(function (k, v) {
		$(v).attr('href', 'tel:' + $(v).data('href'));
	});
}