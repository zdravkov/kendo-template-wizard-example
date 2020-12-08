import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import VueCompositionApi from '@vue/composition-api';
Vue.config.productionTip = false
Vue.use(VueCompositionApi);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')