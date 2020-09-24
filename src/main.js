import Vue from 'vue'
import App from './App'
import '@/assets/scss/mixins/style.scss'
import router from './router'
import vueSmoothScroll from 'vue-smooth-scroll'
import axios from 'axios';

Vue.use(vueSmoothScroll);
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
