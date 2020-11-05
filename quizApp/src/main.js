import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.config.productionTip = false
require('vue')

new Vue({
  render: h => h(App),
}).$mount('#app')
