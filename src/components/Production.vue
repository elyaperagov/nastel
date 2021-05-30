<template>
  <section class="production" id="projects">
    <div class="container">
      <div class="production__texts">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
      </div>
    </div>
    <div class="production__info">
      <div class="container">
        <div class="production__inner">
          <ul class="production__info-items">
            <li
              class="production__info-item"
              v-for="(info, i) in infos"
              :key="i"
            >
              <div class="production__info-inner">
                <p>{{ info.number }}</p>
                <b v-if="info.word"> {{ info.word }} </b>
              </div>
              <span> {{ info.text }} </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Production',
  data() {
    return {
      title: 'Наше производство',
      text:
        'PLATforma входит в холдинг «ПНСК». Производство расположено в Санкт‑Петербурге, завод общей площадью более 12 га. Основные критерии выбора «ПНСК» - это опыт, профессионализм и безупречная репутация.',
      infos: [
        {
          number: '12',
          word: 'гектаров',
          text: 'Площадь собственного завода',
        },
        {
          number: '50+',
          text: 'Зданий построенно за год',
        },
        {
          number: '300+',
          text: 'Сотрудников компании',
        },
        {
          number: '30',
          word: 'лет',
          text: 'опыта в производстве модульных домов',
        },

      ],
    }
  },
}
</script>

<style></style>
