import Vue from 'vue'
import App from './App.vue'
import router from "./assets/js/router.js"
import 'vant/lib/index.css';


import VueRouter from "vue-router"
import Vant from 'vant';
Vue.use(VueRouter)
Vue.use(Vant)


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
