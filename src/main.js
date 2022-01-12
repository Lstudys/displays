import Vue from 'vue'
// import App from './App.vue'
import Main from './Main.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from '../src/router/index';

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(Main),
}).$mount('#app')
