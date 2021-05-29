import Vue from 'vue';
import VueTheMask from 'vue-the-mask'
import SlideUpDown from 'vue-slide-up-down'
import Sprite from '../components/Sprite.vue'
import HeaderMain from '../components/HeaderMain.vue'
import Banners from '../components/Banners.vue'
import Series from '../components/Series.vue'
import Design from '../components/Design.vue'
import Quote from '../components/Quote.vue'
import Production from '../components/Production.vue'
import Exclusive from '../components/Exclusive.vue'
import Request from '../components/Request.vue'
import Partner from '../components/Partner.vue'
import Manufacturing from '../components/Manufacturing.vue'
import Faq from '../components/Faq.vue'
import More from '../components/More.vue'
import FooterMain from '../components/FooterMain.vue'

import Helpers from '../lib/Helpers.js'


Vue.use(VueTheMask)
Vue.use(Helpers)
Vue.component('slide-up-down', SlideUpDown)

Vue.config.comments = true
Vue.config.ignoredElements = [
  'noindex',
  /^ion-/
]

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
    console.log('scroll')
  }
})

const app = new Vue({
  el: '#app',
  data() {
    return {

    }
  },
  watch: {},
  computed: {
  },
  created() {},
  mounted() {
  },
  methods: {
  },
  components: {
    Sprite,
    HeaderMain,
    Banners,
    Series,
    Design,
    Quote,
    Production,
    Exclusive,
    Request,
    Partner,
    Manufacturing,
    Faq,
    More,
    FooterMain
  }
})
