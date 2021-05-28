<template>
  <section class="banners">
    <h1 class="banners__page-title visually-hidden" v-html="title"></h1>
    <div class="banners__inner">
      <swiper
        class="swiper banners__swiper"
        ref="swiper"
        :options="SliderOptions"
      >
        <swiper-slide
          v-for="(banner, b) in items"
          :key="b"
          class="banners__item"
        >
          <div class="banners__wrapper">
            <div class="banners__content">
              <div class="banners__logo-image">
                <img :src="logo" :alt="banner.title" />
              </div>
              <p class="banners__text" v-html="banner.subtitle"></p>
            </div>
            <div class="banners__image">
              <img :src="banner.image" :alt="banner.title" />
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
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Banners",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      SliderOptions: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      title: "Платформа - модульные дома для Вашего комфорта",
      logo: "img/company-name.png",
      items: [
        {
          title: "Платформа - модульные дома для Вашего комфорта",
          image: "img/banner.png",
          subtitle: "модульные дома для Вашего комфорта"
        },
        {
          title: "Платформа - модульные дома для Вашего комфорта",
          image: "img/banner.png",
          subtitle: "модульные дома для Вашего комфорта"
        },
        {
          title: "Платформа - модульные дома для Вашего комфорта",
          image: "img/banner.png",
          subtitle: "модульные дома для Вашего комфорта"
        },
        {
          title: "Платформа - модульные дома для Вашего комфорта",
          image: "img/banner.png",
          subtitle: "модульные дома для Вашего комфорта"
        },
        {
          title: "Платформа - модульные дома для Вашего комфорта",
          image: "img/banner.png",
          subtitle: "модульные дома для Вашего комфорта"
        }
      ]
    };
  },
  computed: {

  },
  mounted() {},
  methods: {},
  mounted() {},
  beforeDestroy() {}
};
</script>
