<template>
  <section class="additional">
    <h2>{{ additional }}</h2>
    <div class="additional__items">
      <div class="additional__wrapper">
        <swiper
          class="swiper additional__swiper"
          ref="additionalServices"
          :options="additionalServices"
        >
          <swiper-slide
            v-for="(item, i_s) in swiper_items"
            v-bind:key="i_s"
            class="additional__item"
          >
            <div class="additional__img">
              <img :src="item.image" :alt="item.title" />
            </div>
            <p class="additional__text">{{ item.title }}</p>
            <a href="#" class="additional__link"> {{ see_more }}</a>
          </swiper-slide>
        </swiper>
        <button class="button swiper-button-next" slot="button-next">
          <svg class="icon" width="9" height="16" aria-hidden="true">
            <use xlink:href="#swiper-arrow"></use>
          </svg>
        </button>
        <button class="button swiper-button-prev" slot="button-prev">
          <svg class="icon" width="9" height="16" aria-hidden="true">
            <use xlink:href="#swiper-arrow"></use>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Banners",
  components: {
    Swiper,
    SwiperSlide,
    Request,
  },
  data() {
    return {
      additional: "Сопутствующие услуги",
      see_more: "Подробнее",
      additionalServices: {
        loop: true,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 32,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          },
          0: {
            slidesPerView: "auto",
            spaceBetween: 16,
          },
        },
      },
      swiper_items: [
        {
          title: "Холодное раздвижное остекление",
          image: "img/warm-glazing.jpg",
        },
        {
          title: "Холодное раздвижное остекление",
          image: "img/warm-opening-glazing.jpg",
        },
        {
          title: "Холодное раздвижное остекление",
          image: "img/warm-turning-glazing.jpg",
        },
      ],
    };
  },
  computed: {},
  mounted() {},
  beforeDestroy() {},
  methods: {},
};
</script>
