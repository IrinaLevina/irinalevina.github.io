$(document).ready(function(){
	$('#anotherCity').select2();

	addInfoPageEvents();
});



var addInfoPageEvents = function () {
	$('.filter-swither-item').on("click", function () {
		$(this).parents('.filter-switcher').find('.filter-swither-item').removeClass('_active');
		$(this).addClass('_active');
	});
}

