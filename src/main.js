import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // svg icon
import '@/assets/css/globe.css'

// set ElementUI lang to EN
//Vue.use(ElementUI)
Vue.use(ElementUI, { size: 'small'});

//代码高亮显示控件prismjs
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'
Vue.use(Prism)
import prismLineNumbers from 'prismjs/plugins/line-numbers/prism-line-numbers'
Vue.use(prismLineNumbers)
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
