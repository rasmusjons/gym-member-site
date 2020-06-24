import Vue from "vue";
import VueRouter from "vue-router";

import Boka from "../views/Boka.vue";
import Competition from "../views/Competition.vue";
import Dashboard from "../views/Dashboard.vue";
import Facebook from "../views/Facebook.vue";
import Home from "../views/Home.vue";
import Login from "../components/auth/Login.vue";
import Priser from "../views/Priser.vue";
import Signup from "../components/auth/Signup.vue";
import User from "../views/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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
    path: "/tavling",
    name: "Competition",
    component: Competition
  },
  {
    path: "/facebook",
    name: "Facebook",
    component: Facebook
  },
  {
    path: "/priser",
    name: "Priser",
    component: Priser
  },
  {
    path: "/user",
    name: "User",
    component: User,
    children: [
      { path: "", name: "Login", component: Login },
      { path: "/signup", name: "Signup", component: Signup }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active"
});

export default router;
