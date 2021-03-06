import Vue from "vue";
import VueRouter from "vue-router";
import MSite from "../pages/MSite/MSite.vue";
import Order from "../pages/Order/Order.vue";
import Profile from "../pages/Profile/Profile.vue";
import Search from "../pages/Search/Search.vue";
import Login from "../pages/Login/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/msite",
    component: MSite,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/order",
    component: Order,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/search",
    component: Search,
    meta: {
      showFooter: true
    }
  },
  {
    path: "*",
    component: MSite
  },
  {
    path: "/login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
