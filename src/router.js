import Vue from "vue";

import Pricing from "@/components/Pricing";
import Home from "@/components/Home";

import Router from "vue-router";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/pricing", name: "Pricing", component: Pricing },
  ],
});
