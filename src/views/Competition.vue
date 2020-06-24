<template>
  <b-container>
    <b-row class="m-1 p-1">
      <b-col md="12" sm="6">
        <b-card no-body>
          <b-tabs card>
            <b-tab title="Liga 1" active title-link-class="text-dark m-1">
              <b-card-text
                >Tab contents 1
                <app-league :items="items"></app-league> </b-card-text
            ></b-tab>
            <b-tab title="Liga 2" title-link-class="text-dark m-1">
              <b-card-text
                >Tab contents 1
                <app-league :items="items2"></app-league> </b-card-text
            ></b-tab>
            <b-tab title="Tävling A" title-link-class="text-dark m-1"
              ><b-card-text>Tab contents 3</b-card-text></b-tab
            >
            <b-tab title="Tävling B" title-link-class="text-dark m-1"
              ><b-card-text>Tab contents 3</b-card-text></b-tab
            >
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AppLeague from "../components/League";
export default {
  data() {
    return {
      items: [
        { Rank: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { Rank: 21, first_name: "Larsen", last_name: "Shaw" },
        { Rank: 89, first_name: "Geneva", last_name: "Wilson" },
        { Rank: 38, first_name: "Jami", last_name: "Carney" }
      ],
      items2: [
        { Rank: 1, first_name: "Dickerson", last_name: "Macdonald" },
        { Rank: 2, first_name: "Larsen", last_name: "Shaw" },
        { Rank: 3, first_name: "Geneva", last_name: "Wilson" },
        { Rank: 4, first_name: "Jami", last_name: "Carney" }
      ]
    };
  },
  components: {
    AppLeague
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
</style>
