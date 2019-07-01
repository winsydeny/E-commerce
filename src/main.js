import Vue from "vue";
import App from "@/App.vue";
import store from '@/store/index'
import router from '@/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//init css
import '@/assets/css/init.css'
import "@/assets/css/iconfont.css"
Vue.config.productionTip = false;
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");