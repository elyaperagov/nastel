//BildSlider
let sliders = document.querySelectorAll('.swiper');
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
		}
	}
}

let slider_additional = new Swiper('.additional__swiper', {
	spaceBetween: 20,
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
			slidesPerGroup: 4,
			loopFillGroupWithBlank: true
		},
		768: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			loopFillGroupWithBlank: true
		},
		0: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			loopFillGroupWithBlank: true
		},
	},
});


let slider_additional1 = new Swiper('.additional__swiper1', {
	spaceBetween: 20,
  slidesPerView: 3,
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
			slidesPerGroup: 4,
			loopFillGroupWithBlank: true
		},
		768: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			loopFillGroupWithBlank: true
		},
		0: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			loopFillGroupWithBlank: true
		},
	},
});


let slider_additional2 = new Swiper('.additional__swiper2', {
	spaceBetween: 20,
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
			slidesPerGroup: 4,
			loopFillGroupWithBlank: true
		},
		768: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			loopFillGroupWithBlank: true
		},
		0: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			loopFillGroupWithBlank: true
		},
	},
});

