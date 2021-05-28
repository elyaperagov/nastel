<template>
  <section class="partner">
    <div class="container">
      <div class="partner__inner">
        <div class="partner__texts">
          <div class="partner__texts-inner">
            <h3>{{ title }}</h3>
            <p>{{ text }}</p>
          </div>
        </div>
        <div class="partner__logos">
          <div class="partner__logo" v-for="(item, i) in logos" :key="i">
            <img :src="item.src" :alt="item.alt" :width="item.width" :height="item.height"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Partner',
  data() {
    return {
      title: 'Наш банк партнер',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      logos: [
        {
          src: 'img/sber.png',
          alt: 'лого сбербанк',
          width: 300,
          height: 50
        },
        {
          src: 'img/vtb.png',
          alt: 'лого втб',
          width: 112,
          height: 40
        },
      ],
    }
  },
}
</script>

<style></style>
