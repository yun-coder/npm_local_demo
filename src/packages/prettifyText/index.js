import prettifyText from './index.vue'

prettifyText.install = function (Vue){
  Vue.component(prettifyText.name,prettifyText)
}

export default prettifyText
