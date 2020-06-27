<template>
  <div>
    <app-jumbo :headline="headlineJumbo"></app-jumbo>

    <b-container>
      <div class="background">
        <b-row class="m-1 p-1">
          <b-col sm="12" md="6">
            <b-card
              class="mt-1"
              header="Helsingborg"
              bg-variant="dark"
              text-variant="white"
            >
              <app-kontakt :contactInfo="contactInfo"></app-kontakt> </b-card
          ></b-col>
          <b-col sm="12" md="6">
            <b-card
              class="mt-1"
              header="Landskrona"
              bg-variant="dark"
              text-variant="white"
            >
              <app-kontakt :contactInfo="contactInfo"></app-kontakt> </b-card
          ></b-col>
        </b-row>
        <b-row class="m-1 p-1">
          <b-col sm="12" md="6">
            <b-card
              class="mt-1"
              header="Helsingborg"
              bg-variant="dark"
              text-variant="white"
            >
              <app-kontakt :contactInfo="contactInfo"></app-kontakt> </b-card
          ></b-col>
          <b-col sm="12" md="6">
            <b-card
              class="mt-1"
              header="Helsingborg"
              bg-variant="dark"
              text-variant="white"
            >
              <app-kontakt :contactInfo="contactInfo"></app-kontakt> </b-card
          ></b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import AppKontakt from "../components/Kontakt";
import AppJumbo from "../components/Jumbo";

export default {
  data() {
    return {
      headlineJumbo: "Kontakta oss",
      contactInfo: {
        title: "PADEL CREW AB",
        name: "PADEL CREW AB",
        adress: "Rännarbanan 32",
        postcode: "252 32",
        postaladress: "Helsingborg",
        phonenumber: "042-442 26 50",
        mail: "info@padelcrew.se"
      }
    };
  },
  components: {
    AppKontakt,
    AppJumbo
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/globalclasses.css";
</style>
