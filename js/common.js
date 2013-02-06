$(document).ready(function() {
	$('.city__change').click(function(event) {
		$('.location').slideToggle();
		return false;
	});
	$('.profile__user').click(function(event) {
		$('.profile__drop').fadeToggle('fast');
		return false;
	});
});