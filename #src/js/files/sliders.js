// https://stackoverflow.com/a/36389263
var getTimeout = function () {
	var e = setTimeout,
		b = {};
	setTimeout = function (a, c) {
		var d = e(a, c);
		b[d] = [Date.now(), c];
		return d
	};
	return function (a) {
		return (a = b[a]) ? Math.max(a[1] - Date.now() + a[0], 0) : NaN
	}
}();

// https://curtistimson.co.uk/post/js/default-negative-variables-to-zero-in-javascript/
function sanitisePercentage(i) {
	return Math.min(100, Math.max(0, i));
}




//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) {}

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) {}

let slider_additional = new Swiper('.additional__swiper', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.swiper-button-next--additional',
		prevEl: '.swiper-button-prev--additional',
	},

	breakpoints: {
		1024: {
			slidesPerView: 3,
			spaceBetween: 32,
			// navigation: {
			// 	nextEl: '.button-next',
			// 	prevEl: '.button-prev',
			// },
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 32
		},
		0: {
			slidesPerView: 'auto',
			spaceBetween: 16,
		},
	},

	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

// Slider
var percentTime;
var tick;
var progressBar = document.querySelector('.swiper-hero-progress');

var mySwiper = new Swiper('.glazing__swiper', {
	effect: 'slide',
	loop: true,
	speed: 1000,
	slidesPerView: 1,
	spaceBetween: 30,
	grabCursor: true,
	keyboard: {
		enabled: true,
		onlyInViewport: true
	},
	watchOverflow: true,
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	roundLengths: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},
	// pagination: {
	//   el: ".swiper-pagination",
	//   type: "fraction"
	// },
	on: {
		slideChange: function () {
			var swiper = this;
			var defaultSlideDelay = swiper.params.autoplay.delay;
			var currentIndex = swiper.realIndex + 1;
			var currentSlide = swiper.slides[currentIndex];
			var currentSlideDelay = currentSlide.getAttribute('data-swiper-autoplay') || defaultSlideDelay;

			updateSwiperProgressBar(progressBar, currentSlideDelay);
		}
	}
});

function updateSwiperProgressBar(bar, slideDelay) {

	function startProgressBar() {
		resetProgressBar();
		tick = setInterval(progress, 50);
	}

	function progress() {

		var timeLeft = getTimeout(mySwiper.autoplay.timeout);


		if (mySwiper.autoplay.running && !mySwiper.autoplay.paused) {
			percentTime = sanitisePercentage(100 - Math.round(timeLeft / slideDelay * 100));
			bar.style.width = percentTime + '%';


			if (bar.style.width.replace('%', '') >= 100) {
				startProgressBar();
			}
		}

		if (mySwiper.autoplay.paused) {
			percentTime = 0;
			bar.style.width = 0;
		}

	}

	function resetProgressBar() {
		percentTime = 0;
		bar.style.width = 0;
		clearInterval(tick);
	}

	startProgressBar();

}