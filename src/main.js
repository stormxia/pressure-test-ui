import Vue from 'vue'
import App from './App.vue'

import axios from './router/axios'
import VueAxios from 'vue-axios'

import router from './router/router'
import store from './store'

import basicContainer from './components/basic-container/main'
import * as urls from '@/config/env'


Vue.config.productionTip = false


Vue.use(router)

Vue.use(VueAxios, axios)

// 注册全局容器
Vue.component('basicContainer', basicContainer)

// 加载相关url地址
Object.keys(urls).forEach(key => {
  Vue.prototype[key] = urls[key]
})


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
