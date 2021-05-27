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
            <div class="design__image">
              <img
                :src="slide.img"
                :alt="slide.img_alt"
                :width="slide.img_width"
                :height="slide.img_height"
              />
            </div>
            <div class="design__texts">
              <h2>{{ slide.title }}</h2>
              <p>{{ slide.text }}</p>
            </div>
          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
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
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            if (index < 9) {
              return `<span class="${className} swiper-pagination-bullet-custom">0${index +
              1}</span>`
            } else {
              return `<span class="${className} swiper-pagination-bullet-custom">${index +
              1}</span>`
            }

          },
        },
        navigation: {},
      },
      slides: [
        {
          title: "Индивидуальное проектирование",
          text:
            'На выбор подходящий размер и конфигурация дома для разных земельных участков и разного состава семьи (молодая пара, семья с маленьким ребенком, дом для большой семьи). Мы сможем установить дом практически где угодно — на участке перед вашим домом, в лесной зоне, на берегу реки.  Доставку осуществляет наша компания.',
          img: 'img/design.jpg',
          img_alt: 'конфигурация дома для разных земельных участков',
          img_width: 680,
          img_height: 500,
        },
        {
          title: "Индивидуальное проектирование",
          text:
            'На выбор подходящий размер и конфигурация дома для разных земельных участков и разного состава семьи (молодая пара, семья с маленьким ребенком, дом для большой семьи). Мы сможем установить дом практически где угодно — на участке перед вашим домом, в лесной зоне, на берегу реки.  Доставку осуществляет наша компания.',
          img: 'img/design.jpg',
          img_alt: 'конфигурация дома для разных земельных участков',
          img_width: 680,
          img_height: 500,
        },
        {
          title: "Индивидуальное проектирование",
          text:
            'На выбор подходящий размер и конфигурация дома для разных земельных участков и разного состава семьи (молодая пара, семья с маленьким ребенком, дом для большой семьи). Мы сможем установить дом практически где угодно — на участке перед вашим домом, в лесной зоне, на берегу реки.  Доставку осуществляет наша компания.',
          img: 'img/design.jpg',
          img_alt: 'конфигурация дома для разных земельных участков',
          img_width: 680,
          img_height: 500,
        },
        {
          title: "Индивидуальное проектирование",
          text:
            'На выбор подходящий размер и конфигурация дома для разных земельных участков и разного состава семьи (молодая пара, семья с маленьким ребенком, дом для большой семьи). Мы сможем установить дом практически где угодно — на участке перед вашим домом, в лесной зоне, на берегу реки.  Доставку осуществляет наша компания.',
          img: 'img/design.jpg',
          img_alt: 'конфигурация дома для разных земельных участков',
          img_width: 680,
          img_height: 500,
        },
        {
          title: "Индивидуальное проектирование",
          text:
            'На выбор подходящий размер и конфигурация дома для разных земельных участков и разного состава семьи (молодая пара, семья с маленьким ребенком, дом для большой семьи). Мы сможем установить дом практически где угодно — на участке перед вашим домом, в лесной зоне, на берегу реки.  Доставку осуществляет наша компания.',
          img: 'img/design.jpg',
          img_alt: 'конфигурация дома для разных земельных участков',
          img_width: 680,
          img_height: 500,
        },
      ],
    }
  },
}
</script>

<style></style>
