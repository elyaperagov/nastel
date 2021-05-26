<template>
  <footer class="footer" v-if="data">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__logo-wrapper">
          <div class="footer__logo">
            <a :href="'/'" class="footer__logo-link">
                <img loading="lazy" src="/img/logo.svg" alt="logo" />
              </a>
          </div>
        </div>
        <nav class="footer__menu">
          <a
              class="header__menu-item"
              v-for="(menu, i) in data.menu_payment"
              :key="i"
              @click.prevent="goTo(menu.link)"
              :href="menu.link"
              v-html="menu.name"
            ></a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  data() {
    return {};
  },
  computed: {

  },
  components: {
  },
  methods: {
    async goTo(link) {
      if (!this.$scrollTo(link)) {
        setTimeout(() => {
          this.$scrollTo(link);
        }, 500);
      }
    },
  },
};
</script>
