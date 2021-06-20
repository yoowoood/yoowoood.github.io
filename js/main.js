/*!
 * Soori | HTML Product Landing Page
 * Author: Web_Trendy
 * Copyright 2021 © Web_Trendy (https://themeforest.net/user/web_trendy/portfolio)
 * Licensed under Envato (https://themeforest.net/licenses/standard)
 *
 * "Love is out mother, we are born of LOVE!" --Rumi
 *
 */

$(document).ready(function(){

	// Locomotive Scroll Initialization (for more info visit https://github.com/locomotivemtl/locomotive-scroll)
	//let scroll = new LocomotiveScroll({
		//el: document.querySelector('[data-scroll-container]'),
	    //smooth: true,
	    //repeat: true,
	//});

	// Update Scroll Instance On Collapse
	let filterCollapse = $("#filter_panel");
	filterCollapse.on('shown.bs.collapse', function () {
		//scroll.update();
	});


	// Search bar
	let searchWrapper = $('#search_wrapper');
	$('#nav_search').on('click', function(){
		searchWrapper.addClass('active');
	});
	$('#search_close').on('click', function(){
		searchWrapper.removeClass('active');
	});
	$(document).keyup(function(e) {
	     if (e.key === "Escape") { 
	        if (searchWrapper.hasClass('active')) {
	        	searchWrapper.removeClass('active');
	        }
	    }
	});


	// Carousel Initialization (for more info visit https://owlcarousel2.github.io/OwlCarousel2/docs)
	
	// Home Page 3 Carousel
	if ($("body.home-3 section.top .owl-carousel").length) {
		$("body.home-3 section.top .owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			dots: false,
		});
	}
	

	// Footer Carousel
	if ($(".blog-footer-carousel").length) {
		$(".blog-footer-carousel").owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			dots: false,
			autoplayTimeout: 2000,
		});
	}

	// Home Page 6 Carousel
	if ($("body.home-6 section.top .owl-carousel").length) {
		$("body.home-6 section.top .owl-carousel").owlCarousel({
			items: 1,
			loop: false,
			autoplay: true,
			rewind: true,
			onChanged: callback6,
		});
		function callback6(event) {
		    let index = event.item.index;
		    $('.carousel-texts').eq(index).addClass('active').siblings().removeClass('active');
		}
	}

	// Home Page 7 Carousel
	if ($("body.home-7 section.top .owl-carousel").length) {
		$("body.home-7 section.top .owl-carousel").owlCarousel({
			items: 1,
			loop: false,
			autoplay: true,
			rewind: true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			onChanged: callback7,
		});
		function callback7(event) {
		    let index = event.item.index;
		    $('.carousel-texts').eq(index).addClass('active').siblings().removeClass('active');
		}
	}

	// Single Product Carousel
	let singleProductCarousel = $(".single-product-carousel");
	if (singleProductCarousel.length) {
		singleProductCarousel.owlCarousel({
			items: 1,
			autoplay: false,
			dots: false,
			onChanged: callback,
		});
		function callback(event) {
		    let index = event.item.index;
		    $('.carousel-thumbnails img').eq(index).addClass('active').siblings().removeClass('active');
		}
	}

	// Single Product Thumbnails Click Function
	$("#slide_1").on('click', function(){
		singleProductCarousel.trigger('to.owl.carousel', [0,300]);
	});
	$("#slide_2").on('click', function(){
		singleProductCarousel.trigger('to.owl.carousel', [1,300]);
	});
	$("#slide_3").on('click', function(){
		singleProductCarousel.trigger('to.owl.carousel', [2,300]);
	});
	$("#slide_4").on('click', function(){
		singleProductCarousel.trigger('to.owl.carousel', [3,300]);
	});

	// Single Product Image Zoom Function (For more info visit http://www.jacklmoore.com/zoom/)
	let productZoomWrapper = document.querySelector('.zoom-wrapper');
	if (productZoomWrapper) {
		$('.zoom-wrapper').zoom({
			url: $(this).attr('data-src'),
			magnify: 1.3,
		});
	}

	

	// Product Color Selector 
	$(".color-selector").on('click', 'span', function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	// Product Size Selector
	$(".size-selector").on('click', 'span', function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	// Quantity Counter
	let quantityNumberEl = $(".quantity-counter .no"),
		quantityNumber = quantityNumberEl.attr("data-no");
	$(".quantity-counter").on('click', '.minus', function(){
		if (quantityNumber > 1) {
			--quantityNumber;
			quantityNumberEl.attr("data-no", quantityNumber).html(quantityNumber);
		}
	});
	$(".quantity-counter").on('click', '.add', function(){
		++quantityNumber;
		quantityNumberEl.attr("data-no", quantityNumber).html(quantityNumber);
	});

	// Product Filter
	$(".color-filter i").on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');;
	});
	let list_view_icon = $("#list_view"),
		grid_view_icon = $("#grid_view"),
		row_view = $(".row_view");
	list_view_icon.on('click', function(){
		row_view.addClass('list');
		scroll.update();
	});
	grid_view_icon.on('click', function(){
		row_view.removeClass('list');
	});

	// Toastr Intialization (for more info visit https://github.com/CodeSeven/toastr)
	if ($(".wishlist").length) {
		toastr.options.showMethod = 'fadeIn';
		toastr.options.hideMethod = 'fadeOut';
		toastr.options.preventDuplicates = true;
		toastr.options.positionClass = "toast-bottom-right";
		toastr.options.timeOut = 2000;

		$(".wishlist").on('click', function(){
			toastr.info('Product added to the wishlist');
		});
	}

	// Price Range Filter
	let slider = document.getElementById('price_range'),
		minValue = document.querySelector('.range-min'),
		maxValue = document.querySelector('.range-max');

	if (slider) {
		noUiSlider.create(slider, {
		    start: [5, 1000],
		    connect: true,
		    range: {
		        'min': 5,
		        'max': 1000
		    }
		});
		slider.noUiSlider.on('update', updateMinMax);
		function updateMinMax() {
			let values = slider.noUiSlider.get();
			minValue.innerHTML = "$" + values[0];
			maxValue.innerHTML = "$" + values[1];
		}
	}


	//scroll.update();

});
 
(function () {
	
})();