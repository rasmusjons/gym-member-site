<template>
  <b-container>
    <b-row class="m-1 p-1">
      <b-col md="12" sm="6">
        <b-card header="Helsingborg" bg-variant="dark" text-variant="white">
          <app-pris :prices="prices"></app-pris> </b-card
      ></b-col>
      <b-col md="12" sm="6">
        <b-card header="Landskrona" bg-variant="dark" text-variant="white">
          <app-pris :prices="prices"></app-pris> </b-card
      ></b-col>
    </b-row>
    <b-row class="m-1 p-1">
      <b-col md="12" sm="6">
        <b-card header="Helsingborg" bg-variant="dark" text-variant="white">
          <app-pris :prices="prices"></app-pris> </b-card
      ></b-col>
      <b-col md="12" sm="6">
        <b-card header="Helsingborg" bg-variant="dark" text-variant="white">
          <app-pris :prices="prices"></app-pris> </b-card
      ></b-col>
    </b-row>
  </b-container>
</template>

<script>
import AppPris from "../components/Pris";
export default {
  data() {
    return {
      prices: [
        "MÅNDAG – TORSDAG 06.00 – 16.00 = 220 KR/TIM",
        "MÅNDAG – TORSDAG 06.00 – 16.00 = 220 KR/TIM",
        "MÅNDAG – TORSDAG 06.00 – 16.00 = 220 KR/TIM",
        "MÅNDAG – TORSDAG 06.00 – 16.00 = 220 KR/TIM",
        "MÅNDAG – TORSDAG 06.00 – 16.00 = 220 KR/TIM"
      ]
    };
  },
  components: {
    AppPris
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
</style>
