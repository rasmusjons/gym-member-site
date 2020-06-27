<template>
  <b-jumbotron fluid class="jumbo" text-variant="white">
    <h1>{{ headline }}</h1>
  </b-jumbotron>
</template>

<script>
export default {
  props: ["headline"]
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/globalclasses.css";

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
