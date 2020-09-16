import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App.vue'
import router from './router'
import echarts from 'echarts'
import axios from 'axios'
import qs from 'qs'

Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
