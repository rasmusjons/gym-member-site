<template>
  <div fluid id="app">
    <app-navbar class="appNavbar" />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer class="appFooter" />
  </div>
</template>

<script>
import AppNavbar from "@/components/Navbar.vue";
import AppFooter from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    AppNavbar,
    AppFooter
  }
};
</script>

<style lang="scss">
@import "/styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Oswald&display=swap");

//ROUTER TRANSITION
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.2s;
}
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 0.2s;
}
//ROUTER TRANSITION - SLUT

#app {
  padding-left: 0 !important;
  padding-right: 0 !important;
  font-family: "Oswald", sans-serif;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z' fill='%23000000' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.appNavbar,
.appFooter {
  background-color: black;
}

.appFooter {
  bottom: 0;
}
@keyframes grow {
  0% {
    border-bottom: rgba(255, 255, 255, 0.3) 2px solid;
  }

  50% {
    border-bottom: rgba(255, 255, 255, 0.7) 2px solid;
  }

  100% {
    border-bottom: rgba(255, 255, 255, 1) 2px solid;
  }
}

/*GLOBALS */

.btn-primary {
  background-color: $padelorange !important;
  border-color: $padelorange !important;
  transition: all 0.2s ease-in-out;
}

.btn-primary:hover {
  opacity: 0.9 !important;
}

.link {
  font-weight: 700;
  color: $padelorange !important;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.link:hover {
  opacity: 0.9;
}

p {
  line-height: 30px;
}
</style>
