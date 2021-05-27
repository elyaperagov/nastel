import Vue from 'vue';
import VueTheMask from 'vue-the-mask'
import SlideUpDown from 'vue-slide-up-down'
import Sprite from '../components/Sprite.vue'
import HeaderMain from '../components/HeaderMain.vue'
import Footer from '../components/Footer.vue'
import Banners from '../components/Banners.vue'
import Series from '../components/Series.vue'
import Design from '../components/Design.vue'
import Quote from '../components/Quote.vue'

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
    Footer,
    Banners,
    Series,
    Design,
    Quote
  }
})