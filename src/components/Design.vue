<template>
  <section class="design">
    <div class="container">
      <div class="design__inner">
        <swiper
          class="swiper design__swiper"
          ref="swiper"
          :options="SliderOptions"
        >
          <swiper-slide
            v-for="(slide, b) in slides"
            :key="b"
            class="design__item"
          >
            <div class="design__content">
              <p class="design__text">{{ slide.text }}</p>
              <div class="design__image">
                <img
                  :src="slide.img"
                  :alt="slide.img_alt"
                  :width="slide.img_width"
                  :height="slide.img_height"
                />
              </div>
            </div>

          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
          <button class="button swiper-button-next" slot="button-next">
            <svg class="icon" width="21" height="12" aria-hidden="true">
              <use xlink:href="#swiper-arrow"></use>
            </svg>
          </button>
          <button class="button swiper-button-prev" slot="button-prev">
            <svg class="icon" width="21" height="12" aria-hidden="true">
              <use xlink:href="#swiper-arrow"></use>
            </svg>
          </button>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Design',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      SliderOptions: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom">${index +
              1}</span>`
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slides: [
        {
          text:
            'На выбор подходящий размер и конфигурация дома для разных земельных участков и разного состава семьи (молодая пара, семья с маленьким ребенком, дом для большой семьи). Мы сможем установить дом практически где угодно — на участке перед вашим домом, в лесной зоне, на берегу реки.  Доставку осуществляет наша компания.',
          img: 'img/design.jpg',
          img_alt: "конфигурация дома для разных земельных участков",
          img_width: 680,
          img_height: 500
        },
        {
          text:
            'На выбор подходящий размер и конфигурация дома для разных земельных участков и разного состава семьи (молодая пара, семья с маленьким ребенком, дом для большой семьи). Мы сможем установить дом практически где угодно — на участке перед вашим домом, в лесной зоне, на берегу реки.  Доставку осуществляет наша компания.',
          img: 'img/design.jpg',
          img_alt: "конфигурация дома для разных земельных участков",
          img_width: 680,
          img_height: 500
        },
        {
          text:
            'На выбор подходящий размер и конфигурация дома для разных земельных участков и разного состава семьи (молодая пара, семья с маленьким ребенком, дом для большой семьи). Мы сможем установить дом практически где угодно — на участке перед вашим домом, в лесной зоне, на берегу реки.  Доставку осуществляет наша компания.',
          img: 'img/design.jpg',
          img_alt: "конфигурация дома для разных земельных участков",
          img_width: 680,
          img_height: 500
        },
      ],
    }
  },
}
</script>

<style></style>
