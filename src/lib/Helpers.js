export default {
  install(Vue, options) {
    Vue.prototype.$cloneObj = function (object) {
      return JSON.parse(JSON.stringify(object));
    }
  }
}