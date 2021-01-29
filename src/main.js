import Vue from 'vue'
import App from './App.vue'
import router from './router'

window.$ = window.jQuery = require("jquery");

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use({
  install: function(Vue){
    Vue.prototype.$jQuery = require('jquery'); // you'll have this.$jQuery anywhere in your vue project
  }
});
