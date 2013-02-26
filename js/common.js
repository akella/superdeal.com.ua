$(document).ready(function() {
	$('.city__change').click(function(event) {
		$('.location').slideToggle();
		return false;
	});
	$('.profile__user').click(function(event) {
		$('.profile__drop').fadeToggle('fast');
		return false;
	});

	$('.pics__wrap').each(function(event) {
		le = $(this).children().length;
		if(le>1){
			$(this).parent().addClass('pics_slider');
			var prev_arr = $(this).parent().children('.pics__prev');
	        var next_arr = $(this).parent().children('.pics__next');
	        $(this).cycle({
	            fx:      'scrollHorz',
	            next:    next_arr,
	            prev:    prev_arr,
	            timeout:  0,
	            speed: 700
	        });
		}
	});
	$('.gallery__caro').before('<ul class="gallery__thumbs"></ul>');
	var prev_arr = $('.gallery__prev');
	var next_arr = $('.gallery__next');
	$('.gallery__pic').cycle({
	    pager:  '.gallery__thumbs',
	    next:    next_arr,
	    prev:    prev_arr,
	    pagerAnchorBuilder: function(idx, slide) {
	        return '<li><a href="#"><img src="' + slide.src + '" width="50" height="50" /></a></li>'; 
	    }
	});
	$('.profile__meta').click(function(event) {
		$('.popup').addClass('show');
		$('.overlay').toggle();
	});
	$('.popup__close').click(function(event) {
		$('.popup').removeClass('show');
		$('.overlay').toggle();
	});
});