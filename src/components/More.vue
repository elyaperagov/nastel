<template>
  <section class="more" id="contacts">
    <div class="container">
      <div class="more__inner">
        <div class="more__picture">
          <img
            loading="lazy"
            :src="img"
            :alt="title"
            :width="width"
            :height="height"
          />
        </div>

        <div class="more__text">
          <h2>{{ title }}</h2>
          <button
            class="button button--round button--white button--more"
            @click.prevent="goTo(contact_link)"
          >
            {{ button_text }}
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
      contact_link: '#contact-us',
    }
  },

  methods: {
    async goTo(link) {
      if (!this.$scrollTo(link)) {
        setTimeout(() => {
          this.$scrollTo(link)
        }, 500)
      }
    },
  },
}
</script>

<style></style>
