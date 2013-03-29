
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
	$('input, textarea').placeholder();


	//landing js - scrollable
	if($('.current-actions__aslider').length>0){
		$('.current-actions__aslider').scrollable({circular:true});
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

/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));