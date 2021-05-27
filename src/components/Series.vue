<template>
  <section class="series">
    <div class="container">
      <div class="series__titles">
        <h2>{{ title }}</h2>
        <p class="series__page-subtitle">{{ subtitle }}</p>
        <a :href="see_all"> {{ see_all_text }} </a>
      </div>

      <div class="series__inner">
        <swiper
          class="swiper series__swiper"
          ref="swiper"
          :options="SliderOptions"
        >
          <swiper-slide
            v-for="(slide, b) in slides"
            :key="b"
            class="series__item"
          >
            <div class="series__blocks">
              <div
                class="series__content"
                v-for="(item, i) in slide.items"
                :key="i"
              >
                <p class="series__text">{{ item.subtitle }}</p>
                <div class="series__image">
                  <img
                    :src="item.image"
                    :alt="item.title"
                    :width="item.width"
                    :height="item.height"
                  />
                </div>
              </div>
            </div>
            <div class="series__counter" v-if="slides.length < 10">
              <p>{{ '01' }}</p>
              <p>{{ '0' + slides.length }}</p>
            </div>
            <div class="series__counter" v-if="slides.length > 10">
              <p>{{ '01' }}</p>
              <p>{{ slides.length }}</p>
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
  name: 'Series',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      SliderOptions: {
        slidesPerView: 1,
        spaceBetween: 20,
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
          items: [
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
        },
        {
          items: [
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
        },
        {
          items: [
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
        },
        {
          items: [
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
        },
        {
          items: [
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
        },
        {
          items: [
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
        },
        {
          items: [
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
        },
        {
          items: [
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
        },
        {
          items: [
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
        },
        {
          items: [
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
        },
        {
          items: [
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
        },
        {
          items: [
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
        },
      ],
    }
  },
}
</script>

<style></style>
