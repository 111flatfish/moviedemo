import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './stores/store'
import axios from "axios"
import Scroller from "./components/Scroller"
import Loading from "./components/Loading"
import MintUI from "mint-ui"
import "mint-ui/lib/style.min.css"
Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.component("Scroller",Scroller);
Vue.component("Loading",Loading);
Vue.use(MintUI);
Vue.filter("nameFormat",function (val) {
  return val.join("、");
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
