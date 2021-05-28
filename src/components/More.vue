<template>
  <section class="more">
    <div class="container">
      <div class="more__inner">
        <div class="more__picture">
          <img :src="img" :alt="title" :width="width" :height="height" />
        </div>

        <div class="more__text">
          <h2>{{ title }}</h2>
          <button class="button button--round button--white button--more">
            <p>{{ button_text }}</p>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'More',
  data() {
    return {
      img: 'img/more.jpg',
      width: 680,
      height: 400,
      title: 'Хотели бы узнать больше?',
      button_text: 'Обратиться к нам',
    }
  },
}
</script>

<style></style>
