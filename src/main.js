import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import router from './router'
import './assets/style.css'

Vue.config.productionTip =false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
