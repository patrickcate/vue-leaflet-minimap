import Vue from 'vue'
import Example from './example.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Example),
}).$mount('#example')
