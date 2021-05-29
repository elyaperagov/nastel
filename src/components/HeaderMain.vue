<template>
  <header class="header" :style="{ top: $root.header_top + 'px' }">
    <div class="container">
      <div class="header__top">
        <div class="header__logo">
          <a :href="'home.html'" class="header__logo-link">
            <img
              loading="lazy"
              :src="logo"
              alt="Логотип Платформа"
              :width="!isMobile ? logo.width : logo_width_mob"
              :height="!isMobile ? logo.height : logo_height_mob"
            />
          </a>
        </div>
        <ul class="header__menu" v-if="!isMobile">
          <li class="header__menu-item" v-for="(menu, i) in menu" :key="i">
            <a :href="menu.link" @click.prevent="goTo(menu.link)">
              {{ menu.name }}</a
            >
          </li>
        </ul>
        <div class="header__contacts" v-if="!isMobile">
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
      <button
        class="button button--toggle"
        @click="menuToggle()"
        :class="{ close: !menuShown }"
      >
        <span></span>
      </button>
    </div>
    <transition name="fade">
      <div class="header__mobile-wrapper" v-if="isMobile" v-show="menuShown">
        <div class="header__overlay" @click="menuClose()"></div>
        <div class="header__mobile">
          <ul class="header__menu">
            <li class="header__menu-item" v-for="(menu, i) in menu" :key="i">
              <a
                :href="menu.link"
                @click.prevent="goTo(menu.link), menuClose()"
              >
                {{ menu.name }}</a
              >
            </li>
          </ul>
          <div class="header__contacts">
            <a
              :href="'tel:' + phone"
              class="header__phone"
              @click.prevent="menuClose()"
            >
              {{ phone }}
            </a>
            <a
              :href="contact_link"
              class="header__contact-us"
              @click.prevent="goTo(contact_link), menuClose()"
            >
              {{ contact_us }}
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuShown: false,
      mobileBreakpoint: 1024,
      windowWidth: window.innerWidth,
      isMobile: false,
      logo: 'img/platformahome.png',
      logo_width: 200,
      logo_height: 111,
      logo_width_mob: 64,
      logo_height_mob: 35,
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
    // window.addEventListener('scroll', this.handleScroll)
    this.toggleMobile()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    // window.removeEventListener('scroll', this.handleScroll)
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
    menuToggle() {
      this.menuShown = !this.menuShown
      document.body.classList.toggle('scroll-off')
    },
    menuClose() {
      if (this.menuShown) {
        this.menuShown = false
        document.body.classList.remove('scroll-off')
      }
    },
    toggleMobile() {
      if (window.innerWidth <= this.mobileBreakpoint) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
    // handleScroll() {
    //   this.menuClose()
    // },
    handleResize() {
      this.toggleMobile(), this.menuClose()
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
