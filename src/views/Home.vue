<template>
  <div>
    <b-jumbotron fluid class="jumbo" text-variant="white">
      <h1 class="pulse">
        SINCE YOU CAN'T BEAT US, <span class="pulse2"> JOIN US! </span>
      </h1>

      <hr class="my-4" />

      <b-button
        class="bokaButton"
        variant="primary"
        @click="$router.push('/boka')"
        >Boka bana
        <b-icon class="p-1" icon="calendar3" :display="{ status }"></b-icon
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
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.pulse {
  animation: pulse 5s;
}

@keyframes pulse {
  0% {
    color: black;
  }
  100% {
    color: white;
  }
}
.pulse2 {
  animation: pulse 10s;
}

@keyframes pulse2 {
  0% {
    color: black;
  }
  80% {
    color: black;
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
.jumbo {
  background: radial-gradient(
    ellipse at center,
    rgba(41, 41, 41, 1) 0%,
    rgba(38, 38, 38, 1) 7%,
    rgba(20, 20, 20, 1) 51%,
    rgba(0, 0, 0, 1) 100%
  );
}
</style>
