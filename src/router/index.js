import Vue from "vue";
import VueRouter from "vue-router";

import Boka from "../views/Boka.vue";
import Competition from "../views/Competition.vue";
import Dashboard from "../views/Dashboard.vue";
import Facebook from "../views/Facebook.vue";
import Home from "../views/Home.vue";
import Kontakter from "../views/Kontakter.vue";
import Login from "../components/auth/Login.vue";
import Regler from "../views/Regler.vue";
import Priser from "../views/Priser.vue";
import Skola from "../views/Skola.vue";
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
    path: "/kontakter",
    name: "Kontakter",
    component: Kontakter
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
    path: "/regler",
    name: "Regler",
    component: Regler
  },
  {
    path: "/priser",
    name: "Priser",
    component: Priser
  },
  {
    path: "/skola",
    name: "Skola",
    component: Skola
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
  linkExactActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    console.log(to);
    console.log(from);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
