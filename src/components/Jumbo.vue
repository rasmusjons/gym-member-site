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
  background-color: #00a685 !important;
}
</style>
