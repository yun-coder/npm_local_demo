// import zButton from './packages/button/index.js';
import prettifyText from './packages/prettifyText/index.js'

// 将引入的组件模块存储，方便循环注册所有组件
const components = [prettifyText];

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  // zButton,
  prettifyText
}
