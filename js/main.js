$(function(){

	// WOW.JS init
	new WOW().init();


	// lettering effect
	$("#os-phrases > h2").lettering('words').children("span").lettering().children("span").lettering(); 


	// animate numbers
	var animateNum = function(){
		$('.animateNum').each(function () {
		    $(this).prop('Counter',0).animate({
		        Counter: $(this).text()
		    }, {
		        duration: 2000,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
		});	
		animateNum = function(){
			return;
		}
	};

	$(window).on('scroll', function(){
		if ($('#funFactCounters').visible()) {
			animateNum();
			// $(window).off('scroll', animateNum);
		} 
	});


	// typed.js
	$(".heroTypedTxt").typed({
		strings: ["WE ARE ^400 PROFESSIONALS", "WE LOVE ^400 WHAT WE DO.", "WE BRING YOUR ^400 IDEAS TO REALITY."],
		// strings: ["WHAT WE DO.", "TO BE DIFFERENT.", "LOREM IPSUM."],
		loop: true,
		typeSpeed: 100,
		backDelay: 2000
	});


	// scroll to learn more 
	$('.scrollMoreBtn').on('click', function(){
		var target = $(this).attr('href');
		var offsetY = $(target).offset().top;
		console.log(offsetY)
		$('html, body').animate({
			scrollTop: offsetY
		})
	});


	// navigation menu
	(function(){
		var tl = new TimelineMax();
		var closeCompl = function(){
			// $('.mobileNavMenusWrap').fadeOut();
		};
		var closeNav = function(){
            tl.staggerFromTo(
                '.mobileNavMenus li', 0.2,
                {opacity: '1', marginTop: '0', rotation: '0', scaleX: '1'},
                {opacity: '0', marginTop: '10px', rotation: '2', scaleX: '.95'},
                0.1
			).fromTo('.mobileNavWrap', 0.2,
                {display: 'block', opacity: 1},
                {display: 'none', opacity: 0}
            );
		};
		$('.hamburgerBtn').on('click', function(){
			tl.fromTo('.mobileNavWrap', 0.2,
					{display: 'none', opacity: 0},
					{display: 'block', opacity: 1}
				).staggerFromTo(
					'.mobileNavMenus li', 0.4,
					{opacity: '0', marginTop: '10px', rotation: '10', scaleX: '.95'},
					{opacity: '1', marginTop: '0', rotation: '0', scaleX: '1'},
				0.2);
		});
		$('.closeNav').on('click', closeNav);
		$(window).on('keyup', function(e){
			if (e.keyCode == 27) {
				closeNav();
			}
		});
	})();


	// Page smooth scroll
    // var $window = $(window); //Window object
    // var scrollTime = 0.3; //Scroll time
    // var scrollDistance = 200; //Distance. Use smaller value for shorter scroll and greater value for longer scroll
    // $window.on("mousewheel DOMMouseScroll", function(event) {
    	// console.log('asdasd');
     //    event.preventDefault();
     //    var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
     //    var scrollTop = $window.scrollTop();
     //    var finalScroll = scrollTop - parseInt(delta * scrollDistance);
     //    TweenMax.to($window, scrollTime, {
     //        scrollTo: { y: finalScroll, autoKill: true },
     //        ease: Power1.easeOut, //For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
     //        autoKill: true,
     //        overwrite: 5
     //    });
    // });


	// technologiesIcons shuffle & limit
 //    $.fn.shuffle = function() {
 //        var allElems = this.get(),
 //            getRandom = function(max) {
 //                return Math.floor(Math.random() * max);
 //            },
 //            shuffled = $.map(allElems, function(){
 //                var random = getRandom(allElems.length),
 //                    randEl = $(allElems[random]).clone(true)[0];
 //                allElems.splice(random, 1);
 //                return randEl;
 //           });
 //        this.each(function(i){
 //            $(this).replaceWith($(shuffled[i]));
 //        });
 //        return $(shuffled);
 //    };
	// $('.technologiesIcons li').shuffle();
	// $('.technologiesIcons li:gt(7)').hide();



	// $('.morphBtn').on('click', function(){
	// 	var offsetT = $(this).offset().top - $(window).scrollTop(),
	// 		offsetL = $(this).offset().left,
	// 		content = $(this).next('.morphContent');
	// 	content.css({
	// 		position: 'fixed',
	// 		top: offsetT,
	// 		left: offsetL,
	// 		height: 'initial',
	// 		width: 'initial'
	// 	})
	// 	TweenMax.to(content, 2, {
	// 		css:{
	// 			width: '100%',
	// 			height: '100%',
	// 			left: 0,
	// 			top: 0,
	// 			background: 'red'
	// 		}
	// 	})
	// });

	// animated fullpage moadl
	// $(".personDetailsBtn, .serviceDetailsBtn").animatedModal({
	//   	animationDuration: '.5s',
	//   	animatedIn: 'fadeIn',
	//   	animatedOut: 'fadeOutUp',
	//   	overflow: 'auto',
	//   	color: '#fff',
	//   	beforeOpen: function(){
	// 		var tl = new TimelineMax();
	// 		var animationFrom = {
	// 			position: 'relative',
	// 			y: -10,
	// 			autoAlpha: 0
	// 		};
	// 		var animationTo = {
	// 			position: 'relative',
	// 			y: 0,
	// 			autoAlpha: 1
	// 		};
	// 		tl.staggerFromTo('.willAnimate', 1.5, animationFrom, animationTo, .3);
	//   	},
	//   	afterClose: function(){
    //
	//   	}
	// });

	// magnific popup
    $('.popupBtn').magnificPopup({
        type: 'inline',
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        autoFocusLast: false

    });
    $('.closeModal').on('click', function(e){
    	e.preventDefault();
        $.magnificPopup.close();
    });

    // $('.teamWrap .cardWrap').on('mouseenter', function(){
    	// $(this).addClass('active');
	// }).on('mouseleave', function(){
     //    $(this).removeClass('active');
	// });



    // select2
	$('select').select2({
		minimumResultsForSearch: -1,
    	dropdownAutoWidth : true,
    	width: ''
	});


	// jquery tabs
	$( ".tabs" ).tabs();



	// get quote tabs
	(function(){
		var target,
			targetElems,
			onCompleteFunc;

		// onload appear animation
		TweenMax.staggerFromTo($('.quoteTab.active').find('.willAnimate'), .5, {
			opacity: 0,
			scale: .8,
			y: -10
		}, {
			opacity: 1,
			scale: 1,
			y: 0
		}, .1)

		// set height for quotes container
        $('.quoteCont').css({minHeight: $('.quoteTab.active').height()});

        $(window).on('resize', function(){
            $('.quoteCont').css({minHeight: $('.quoteTab.active').height()});
        });
		// triger click to dots on next button click
		$(document).on('click', '.getQuoteNextBtn', function(e){
			e.preventDefault();
			target = $(this).attr('href');
			var form = $("#quote-form");
			if(target == '#contact-info') {
				form.validate({
					onkeyup: false,
					rules: {
						url: {
							url: true
                        }
					},
					errorPlacement: function(error, element){
                        error.appendTo(element.parents('.formRow'));
					}
				});
				if(form.valid() == false) {
					return false;
				}
				$(this).attr('href', '#technical-info');
				target = '#technical-info';
			} else if(target == '#technical-info') {
				form.validate({
					onkeyup: false,
                    errorPlacement: function(error, element){
                        error.appendTo(element.parents('.formRow'));
                    }
				});
				if(form.valid() == false) {
					return false;
				}
				$(this).attr('href', '#features-notes');
				target = '#features-notes';
				$(this).text('Finish');
			} else if(target == '#features-notes') {
				form.validate({
					onkeyup: false,
                    errorPlacement: function(error, element){
                        error.appendTo(element.parents('.formRow'));
                    }
				});
				if(form.valid() == false) {
					return false;
				} else {
					$('#quote-form').submit();
					return false;
				}
			}
			targetElems = $(target).find('.willAnimate');
			activeElems = $('.quoteTab.active').find('.willAnimate');
			var _this = $('.quoteDots .active').next('li').children('a');

			TweenMax.staggerFromTo(activeElems, .5, {
				opacity: 1,
				scale: 1,
				y: 0
			}, {
				opacity: 0,
				scale: .8,
				y: -10
			}, .1, function(){

				$('.quoteDots').find('li').removeClass('active');
				_this.parent('li').addClass('active');
				$('.quoteTab').removeClass('active');
				$(target).addClass('active');
				$('.quoteCont').css({minHeight: $('.quoteTab.active').height()});

				TweenMax.staggerFromTo(targetElems, .5, {
					opacity: 0,
					scale: .8,
					y: -10
				}, {
					opacity: 1,
					scale: 1,
					y: 0
				}, .1)
			});
		});
	})();

	$(document).on('click', '.closeAlertBtn', function(){
		$('.msgBox').hide();
	});



    // $('.readmore').readmore({
     //    speed: 100,
     //    collapsedHeight: 200
	// });

    // text read more
    $('.readmore').each(function(){
        var self = $(this);
        var h = self.data('height') ? self.data('height') : 180;
        var moreText = self.data('moretext') ? self.data('moretext') : 'Read More';
        var lessText = self.data('lesstext') ? self.data('lesstext') : 'Read Less';
        var moreLessBtn = $('<button class="txtBtn">' + moreText + '</button>');
        var isOpen = false;

        if (self.actual('height') > h ){
        	self.addClass('readmoreActive');
            self.height(h);
            self.after(moreLessBtn);
            moreLessBtn.on('click', function(){
                if (!isOpen) {
                    $(this).text(lessText);
                    self.addClass('open').height('');
                } else {
                    $(this).text(moreText);
                    self.removeClass('open').height(h);
                }
                isOpen = !isOpen;
            });
		}
    });


}); // end of document ready


$(window).load(function(){

	// isotope
	var $grid = $('.grid').isotope({
		itemSelector: '.gridItem',
		percentPosition: true,
		masonry: {
			columnWidth: '.gridSizer'
		}
	});
	$('.gridFilters').on( 'click', 'button', function() {
		$('.gridFilters button').removeClass('active');
		$(this).addClass('active');
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});



	// slick carousel
	$('.slickOne').each(function(){
		$(this).slick({
			arrows: false,
			dots: true,
			appendDots: $(this).next('.slickNav'),
			fade: true,
			cssEase: 'linear'
		});

	});
	$('.slickOne').on('beforeChange', function(event, slick, currentSlide, nextSlide, prevSlide){
		new WOW({
			boxClass: 'projectsWow'
		}).init();
	});
	$('.techCarousel').slick({
		arrows: false,
		dots: true,
		appendArrows: $(this).next('.slickNav'),
		cssEase: 'linear',
		slidesToShow: 10,
		slidesToScroll: 10,

		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 6
			}
		}, {
			breakpoint: 482,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}]
	});
	
	
	// animate parallax images from background color to image
	$('.heroWrap').addClass('imageLoaded');





}); // end of window load




