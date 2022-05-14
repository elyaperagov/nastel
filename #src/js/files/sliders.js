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

function sliders_bild_callback(params) {}

let slider_additional = new Swiper('.additional__swiper', {

  pagination: {
    el: ".swiper-pagination-additional",
    clickable: true
  },
	navigation: {
		nextEl: '.swiper-button-next--additional',
		prevEl: '.swiper-button-prev--additional',
	},
	breakpoints: {
		1024: {
			slidesPerView: 4,
			spaceBetween: 0,
			slidesPerGroup: 4,
			loopFillGroupWithBlank: true
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 0,
			slidesPerGroup: 3,
			loopFillGroupWithBlank: true
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 0,
			slidesPerGroup: 1,
			loopFillGroupWithBlank: true
		},
	},
});


let slider_additional1 = new Swiper('.additional__swiper1', {
  slidesPerView: 3,
  spaceBetween: 0,
  slidesPerGroup: 3,
  loopFillGroupWithBlank: false,
  pagination: {
    el: ".swiper-pagination-additional1",
    clickable: true
  },
	navigation: {
		nextEl: '.swiper-button-next--additional1',
		prevEl: '.swiper-button-prev--additional1',
	},
	breakpoints: {
		1024: {
			slidesPerView: 4,
			spaceBetween: 0,
			slidesPerGroup: 4,
			loopFillGroupWithBlank: true
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 0,
			slidesPerGroup: 3,
			loopFillGroupWithBlank: true
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 0,
			slidesPerGroup: 1,
			loopFillGroupWithBlank: true
		},
	},
});


let slider_additional2 = new Swiper('.additional__swiper2', {
  slidesPerView: 3,
  spaceBetween: 0,
  slidesPerGroup: 3,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination-additional2",
    clickable: true
  },
	navigation: {
		nextEl: '.swiper-button-next--additional2',
		prevEl: '.swiper-button-prev--additional2',
	},
breakpoints: {
		1024: {
			slidesPerView: 4,
			spaceBetween: 0,
			slidesPerGroup: 4,
			loopFillGroupWithBlank: true
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 0,
			slidesPerGroup: 3,
			loopFillGroupWithBlank: true
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 0,
			slidesPerGroup: 1,
			loopFillGroupWithBlank: true
		},
	},
});

