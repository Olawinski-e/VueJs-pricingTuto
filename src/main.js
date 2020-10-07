import Vue from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/scss/index.scss";

import router from "@/router";

import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
