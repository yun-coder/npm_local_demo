import Vue from 'vue'
import App from './App.vue'

// import zButton from './index'
import prettifyText from './index'
import Print from 'vue-print-nb'

// Vue.use(zButton)
Vue.use(prettifyText)

Vue.use(Print);


new Vue({
  el: '#app',
  render: h => h(App)
})
