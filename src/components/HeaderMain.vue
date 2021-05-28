<template>
  <header class="header" :style="{ top: $root.header_top + 'px' }">
    <div class="container">
      <div class="header__top">
        <div class="header__logo">
          <a :href="'/'" class="header__logo-link">
            <img
              loading="lazy"
              :src="logo"
              alt="Логотипа Платформа"
              :width="width"
              :height="height"
            />
          </a>
        </div>

        <nav class="header__menu" v-if="!isMobile">
          <a
            class="header__menu-item"
            v-for="(menu, i) in menu"
            :key="i"
            :href="menu.link"
          >
            {{ menu.name }}</a
          >
        </nav>

        <div class="header__contacts">
          <a
            :href="'tel:' + phone"
            class="header__phone"
            @click.prevent="goTo(contact_link)"
          >
            {{ phone }}
          </a>
          <a :href="contact_link" class="header__contact-us">
            {{ contact_us }}
          </a>
        </div>
      </div>
      <!-- <div
        class="header__menu-toggle"
        @click="menuToggle()"
        :class="{ close: !$store.state.menuShown }"
      >
        <span></span>
      </div> -->
    </div>
    <!-- <transition name="fade">
      <div
        class="header__mobile"
        v-if="isMobile"
        v-show="$store.state.menuShown"
      >
        <nav class="header__menu header__menu--mobile">
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
    </transition> -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileBreakpoint: 1024,
      windowWidth: window.innerWidth,
      isMobile: false,
      logo: 'img/platformahome.png',
      width: 200,
      height: 111,
      menu: [
        {
          name: 'Концепция',
          link: '#concepts',
        },
        {
          name: 'Серии',
          link: '#series',
        },
        {
          name: 'Проекты',
          link: '#projects',
        },
        {
          name: 'Блог',
          link: '#blog',
        },
        {
          name: 'Контакты',
          link: '#contacts',
        },
      ],
      phone: '+7 (812) 336-45-00',
      contact_us: 'Обратиться к нам',
      contact_link: '#contact-us',
    }
  },
  computed: {},
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.toggleMobile()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    this.toggleMobile()
  },
  methods: {
    async goTo(link) {
      if (!this.$scrollTo(link)) {
        setTimeout(() => {
          this.$scrollTo(link)
        }, 500)
      }
    },
    menuToggle(state = null) {
      if (state === null) {
        state = !this.$store.state.menuShown
      }
      this.$store.commit('setMenuState', state)
    },
    menuClose(state) {
      if (this.$store.state.menuShown === true) {
        this.$store.state.menuShown = false
      }
      this.$store.commit('setMenuClosed', state)
    },
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
  },
  created() {
    let that = this
    document.addEventListener('keyup', function(evt) {
      if (evt.keyCode === 27) {
        that.menuClose(true)
      }
    })
  },
  components: {},
}
</script>
