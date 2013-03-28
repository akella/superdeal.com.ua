
$.fn.scrollableAddClones = function(addItems) {
    // grab scrollable plugin
    var scrollable;
    if (!(scrollable = $(this).data('scrollable')) || !scrollable.getConf().circular)
    return;
    // grab scrollable elements and remember it's count
    var nodes = scrollable.getItems();
    var length = nodes.length;

    // grab class for the nodes
    var clonedClass = scrollable.getConf().clonedClass;
    // get wrap object to append the clones to
    var wrap = scrollable.getItemWrap();
    // fill as much nodes as needed for 500 pixels
    if (!addItems) addItems = Math.ceil(1000 / nodes.eq(1).width());
    // create fake container to add the clones to (max 15 clones)
    var newNodesAppend = $('<span />');
    for (var i = 1; i <= (addItems < 15 ? addItems : 15); i++)
    nodes.eq(i % length).clone().addClass(clonedClass).appendTo(newNodesAppend);
    // insert HTML
    newNodesAppend.children().appendTo(wrap);
}



$(document).ready(function() {



	//landing js - scrollable
	if($('.current-actions__aslider').length>0){
		$('.current-actions__aslider').scrollable();
		$(".current-actions__aslider").scrollableAddClones();
	}
	//landing 2 js - cycle
	$('.offerslider').cycle({
	            fx:      'scrollHorz',
	            next:    '.offerslider__next',
	            prev:    '.offerslider__prev',
	            timeout:  0,
	            speed: 700
	        });



	$('.js-firstlogin, .overlay').click(function(event) {
		$('body').removeClass('is-firstlogin');
	});
	$('.acco__head').click(function(event) {
		
		$(this).parent().toggleClass('is-open');
		$(this).next().slideToggle();
	});

	$('.city__change').click(function(event) {
		$('.location').slideToggle();
		$('.city__current').toggleClass('active');
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