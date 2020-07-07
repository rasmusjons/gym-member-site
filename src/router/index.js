import Vue from "vue";
import VueRouter from "vue-router";

import Admin from "../views/Admin.vue";
import Boka from "../views/Boka.vue";
import Dashboard from "../views/Dashboard.vue";
import Home from "../views/Home.vue";
import Login from "../components/auth/Login.vue";
import Signup from "../components/auth/Signup.vue";
import User from "../views/User.vue";

Vue.use(VueRouter);

const routes = [
  //Wild-card route
  {
    path: "*",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  },
  {
    path: "/boka",
    name: "Boka",
    component: Boka
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },

  {
    path: "/user",
    name: "User",
    component: User,

    children: [
      {
        path: "",
        name: "Login",
        component: Login
      },
      { path: "/signup", name: "Signup", component: Signup }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
