<template>
  <section class="series" id="series">
    <div class="container">
      <div class="series__titles">
        <h2>{{ title }}</h2>
        <p class="series__page-subtitle">{{ subtitle }}</p>
        <a :href="see_all"> {{ see_all_text }} </a>
      </div>

      <div class="series__inner">
        <swiper
          v-if="!isMobile"
          class="swiper series__swiper"
          ref="swiper"
          :options="SliderOptions"
        >
          <swiper-slide
            v-for="(slide, b) in desktopSlides"
            :key="b"
            class="series__item"
          >
            <div class="series__blocks">
              <div class="series__content" v-for="(item, i) in slide" :key="i">
                <p class="series__text">{{ item.subtitle }}</p>
                <div class="series__image">
                  <img
                    loading="lazy"
                    :src="item.image"
                    :alt="item.title"
                    :width="item.width"
                    :height="item.height"
                  />
                </div>
              </div>
            </div>
            <div class="series__counter" v-if="desktopSlides.length < 10">
              <p>{{ '01' }}</p>
              <p>{{ '0' + desktopSlides.length }}</p>
            </div>
            <div class="series__counter" v-if="desktopSlides.length > 10">
              <p>{{ '01' }}</p>
              <p>{{ desktopSlides.length }}</p>
            </div>
          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>

          <button class="button swiper-button-prev" slot="button-prev">
            <svg class="icon" width="21" height="12" aria-hidden="true">
              <use xlink:href="#swiper-arrow"></use>
            </svg>
          </button>
          <button class="button swiper-button-next" slot="button-next">
            <svg class="icon" width="100" height="100" aria-hidden="true">
              <use xlink:href="#right-button"></use>
            </svg>
          </button>
        </swiper>
        <swiper
          v-if="isMobile"
          class="swiper series__swiper"
          ref="swiper"
          :options="SliderOptions"
        >
          <swiper-slide
            v-for="(slide, b) in mobileSlides"
            :key="b"
            class="series__item"
          >
            <div class="series__blocks">
              <div class="series__content" v-for="(item, i) in slide" :key="i">
                <p class="series__text">{{ item.subtitle }}</p>
                <div class="series__image">
                  <img
                    loading="lazy"
                    :src="item.image"
                    :alt="item.title"
                    :width="item.width"
                    :height="item.height"
                  />
                </div>
              </div>
            </div>
            <!-- <div class="series__counter" v-if="slides.length < 10">
              <p>{{ '01' }}</p>
              <p>{{ '0' + slides.length }}</p>
            </div>
            <div class="series__counter" v-if="slides.length > 10">
              <p>{{ '01' }}</p>
              <p>{{ slides.length }}</p>
            </div> -->
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
  name: 'Series',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      mobileBreakpoint: 1024,
      windowWidth: window.innerWidth,
      isMobile: false,

      SliderOptions: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      title: 'Наши серии',
      subtitle:
        'PLATforma Home– это не просто дома, идеально созданные в заводских условиях по современным технологиям. Это философия жизни в стиле максимального личного комфорта, уюта и благополучия.',
      logo: 'img/company-name.png',
      see_all: '#',
      see_all_text: 'Смотреть все',
      slides: [
        {
          title: 'Серия "Cabin"',
          image: 'img/production.jpg',
          width: 510,
          height: 400,
          subtitle: 'Cabin',
        },
        {
          title: 'Серия "Patio"',
          image: 'img/patio.jpg',
          width: 510,
          height: 400,
          subtitle: 'Патио',
        },
        {
          title: 'Серия "Зигзаг"',
          image: 'img/zigzag.jpg',
          width: 510,
          height: 400,
          subtitle: 'Зигзаг',
        },
        {
          title: 'Серия "Cabin"',
          image: 'img/cabin.jpg',
          width: 510,
          height: 400,
          subtitle: 'Cabin',
        },
        {
          title: 'Серия "Patio"',
          image: 'img/patio.jpg',
          width: 510,
          height: 400,
          subtitle: 'Патио',
        },
        {
          title: 'Серия "Зигзаг"',
          image: 'img/zigzag.jpg',
          width: 510,
          height: 400,
          subtitle: 'Зигзаг',
        },
        {
          title: 'Серия "Cabin"',
          image: 'img/cabin.jpg',
          width: 510,
          height: 400,
          subtitle: 'Cabin',
        },
        {
          title: 'Серия "Patio"',
          image: 'img/patio.jpg',
          width: 510,
          height: 400,
          subtitle: 'Патио',
        },
        {
          title: 'Серия "Зигзаг"',
          image: 'img/zigzag.jpg',
          width: 510,
          height: 400,
          subtitle: 'Зигзаг',
        },
      ],
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.toggleMobile()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    this.toggleMobile()
  },
  methods: {
    toggleMobile() {
      if (window.innerWidth <= this.mobileBreakpoint) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
    handleResize() {
      this.toggleMobile()
    },
    chunkArray(myArray, chunk_size) {
      let index = 0
      let arrayLength = myArray.length
      let tempArray = []
      for (index = 0; index < arrayLength; index += chunk_size) {
        let myChunk = myArray.slice(index, index + chunk_size)
        tempArray.push(myChunk)
      }
      return tempArray
    },
  },
  computed: {
    desktopSlides: function() {
      let desktopUsers = []
      this.slides.forEach((user) => {
        desktopUsers.push(user)
      })
      let desktopUserSlides = this.chunkArray(desktopUsers, 3)
      return desktopUserSlides
    },
    mobileSlides: function() {
      let mobileUsers = []
      this.slides.forEach((user) => {
        mobileUsers.push(user)
      })
      let mobileUserSlides = this.chunkArray(mobileUsers, 1)
      return mobileUserSlides
    },
  },
}
</script>

<style></style>
