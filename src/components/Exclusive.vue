<template>
  <section class="exclusive">
    <div class="container">
      <div class="exclusive__inner">
        <div class="exclusive__info">
          <h2>{{ title }}</h2>
          <p class="exclusive__text">{{ text }}</p>
          <div class="exclusive__text-items">
            <div
              class="exclusive__text-item"
              v-for="(item, i) in items"
              :key="i"
            >
              <div class="exclusive__item-inner" v-if="item.type === 'text'">
                <svg class="icon" width="45" height="45" aria-hidden="true">
                  <use xlink:href="#olive-branches"></use>
                </svg>
                <p class="exclusive__text-content">{{ item.text }}</p>
              </div>
              <div class="exclusive__item-inner" v-if="item.type === 'link'">
                <a class="button button--round" :href="item.link">
                  <p>{{ item.text }}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="exclusive__picture-wrapper">
          <swiper
            class="swiper exclusive__swiper"
            ref="swiper"
            :options="SliderOptions"
          >
            <swiper-slide
              v-for="(slide, b) in slides"
              :key="b"
              class="exclusive__item"
            >
              <div class="exclusive__image">
                <img
                  :src="slide.img"
                  :alt="slide.img_alt"
                  :width="slide.img_width"
                  :height="slide.img_height"
                />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Exclusive',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      SliderOptions: {
        slidesPerView: 1,
        spaceBetween: 20,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      title: 'Эксклюзивный дизайн от RHIZOME',
      text:
        'Архитектурное бюро из Петербурга, основанное в 2011 году. На сегодняшний день Rhizome – это команда из 12 архитекторов, ведущих работу над проектами разного масштаба: архитектура, благоустройство территорий, общественные интерьеры.',
      items: [
        {
          text: 'Собака.ру «Петербург будущего 2020», Архитектурное бюро года',
          type: 'text',
        },
        {
          text: 'Собака.ру «Петербург будущего 2019», Дизайн отеля, Точка на Карте. Приозерск',
          type: 'text',
        },
        {
          text: 'АрхиWood 2019, Павильон Гостиная в Приозерске',
          type: 'text',
        },
        {
          text:
            'Подробнее о RHIZHOME',
          type: 'link',
          link: '#',
        },
      ],
      slides: [
        {
          img: 'img/production.jpg',
          alt: 'Эксклюзивный дизайн от RHIZOME',
          width: 790,
          height: 450,
        },
        {
          img: 'img/rhizome.jpg',
          alt: 'Эксклюзивный дизайн от RHIZOME',
          width: 790,
          height: 450,
        },
      ],
    }
  },
}
</script>

<style></style>
