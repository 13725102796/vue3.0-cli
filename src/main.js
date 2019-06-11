import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import 'lib-flexible/flexible'
import vant from 'vant'
// 注册组件
Vue.use(vant);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
