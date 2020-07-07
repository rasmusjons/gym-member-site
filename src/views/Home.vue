<template>
  <div>
    <b-jumbotron fluid class="jumboHome" text-variant="white">
      <h1 class="pulseHome">
        no one knows what it means,
        <span class="pulse2Home"> but it's provocative! </span>
      </h1>

      <hr class="my-4" />

      <b-button
        class="bokaButton"
        variant="primary"
        @click="handleROuting('/boka')"
        >Boka <b-icon class="p-1" icon="calendar3"></b-icon
      ></b-button>
    </b-jumbotron>
    <app-mainbody> </app-mainbody>
  </div>
</template>

<script>
import AppMainbody from "@/components/Mainbody.vue";

export default {
  name: "Home",
  components: {
    AppMainbody
  },
  methods: {
    handleRouting(route) {
      if (this.$router.currentRoute.path === route) {
        return;
      } else {
        this.$router.replace(route);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/globalclasses.css";

.pulseHome {
  animation: pulse 5s;
}

@keyframes pulse {
  0% {
    color: #00a685;
  }
  100% {
    color: white;
  }
}
.pulse2Home {
  animation: pulse 10s;
}

@keyframes pulse2 {
  0% {
    color: #00a685;
  }
  80% {
    color: #00a685;
  }
  100% {
    color: white;
  }
}

.bokaButton {
  opacity: 0;
  animation: slide 1s forwards;
  animation-delay: 3s;
}

@keyframes slide {
  0% {
    transform: translateX(-20%);
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
.jumboHome {
  background-color: #00a685;
}
</style>
