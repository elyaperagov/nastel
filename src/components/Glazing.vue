<template>
  <section class="glazing">
    <div class="container">
      <div class="glazing__inner">
        <div class="glazing__texts">
          <h1 class="visually-hidden">{{ title }}</h1>
          <h2 class="glazing__page-title">{{ title }}</h2>
          <div class="glazing__text" v-html="text_upper"></div>
          <p class="glazing__subtitle">{{ subtitle }}</p>
          <div class="glazing__text" v-html="text_bottom"></div>
          <div class="glazing__swiper-wrapper">
            <swiper
              class="swiper glazing__swiper"
              ref="swiper"
              :options="SliderOptions"
            >
              <swiper-slide
                v-for="(swiper_item, b) in swiper_items"
                :key="b"
                class="glazing__item"
              >
                <div class="glazing__wrapper">
                  <div class="glazing__image">
                    <img
                      loading="lazy"
                      :src="swiper_item.image"
                      :alt="swiper_item.title"
                    />
                  </div>
                </div>
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
          <div class="glazing__prices">
            <p class="glazing__price-title">{{ prices_title }}</p>
            <div class="glazing__price" v-for="(price, i) in prices" :key="i">
              <p class="glazing__price-name">{{ price.name }}</p>
              <p class="glazing__price-price">{{ price.price }}</p>
            </div>
          </div>
        </div>
        <Request :class="{ 'form--fixed': isFormSticky }" />
      </div>
      <Additional />
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Request from "../components/Request.vue";
import Additional from "../components/Additional.vue";

export default {
  name: "Banners",
  components: {
    Swiper,
    SwiperSlide,
    Request,
    Additional,
  },
  data() {
    return {
      isFormSticky: false,
      SliderOptions: {
        slidesPerView: 1,
        spaceBetween: 40,
        loop: true,
        centeredSlides: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiper_items: [
        {
          title: "Остекление АВАНГАРД «В РАМАХ»",
          image: "img/avangard-slider.jpg",
        },
        {
          title: "Остекление АВАНГАРД «В РАМАХ»",
          image: "img/avangard-slider.jpg",
        },
        {
          title: "Остекление АВАНГАРД «В РАМАХ»",
          image: "img/avangard-slider.jpg",
        },
      ],
      prices: [
        {
          name: "Название услуги",
          price: "Стоимость",
        },
        {
          name: "Название услуги",
          price: "Стоимость",
        },
        {
          name: "Название услуги",
          price: "Стоимость",
        },
      ],
      title: "Замена холодного остекления на теплое по технологии «В рамах»‎",
      prices_title: "Стоимость услуг",
      text_upper:
        "<p>Мы производим демонтаж старых холодных стёкол и створок. Во все образовавшиеся проёмы мы устанавливаем пвх рамы Rehau или Veka с энергосберегающими стеклопакетами.</p>",
      subtitle: "Остекление АВАНГАРД «В РАМАХ»",
      text_bottom:
        "<p>В данном холодном остеклении штапики, находятся с внутренней стороны помещения, что позволяет произвести демонтаж стекол и створок внутри балкона, без использования услуг альпинистов. </p> <p>В данном холодном остеклении штапики, находятся с внутренней стороны помещения, что позволяет произвести демонтаж стекол и створок внутри балкона, без использования услуг альпинистов. </p> <p>Швы между створками, рамами, места примыканий к стенам, полу и потолку заполняются утеплителем, герметизируются и закрываются декоративными накладками. </p> <p>С уличной стороны ширина профиля чуть больше, чем на не застекленных балконах.</p>",
    };
  },
  computed: {},
  mounted() {
    window.addEventListener("scroll", this.scrollHandler);
    this.scrollHandler();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollHandler);
  },
  methods: {
    scrollHandler(e) {
      this.isFormSticky = window.pageYOffset > 0;
    },
  },
};
</script>
