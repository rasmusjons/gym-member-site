<template>
  <div>
    <app-jumbo :headline="headlineJumbo"></app-jumbo>

    <b-container>
      <div class="background">
        <b-row class="m-2">
          <b-col md="6" sm="12">
            <!-- NEWSFEED PLUGIN -->

            <h2>Vår Facebooksida</h2>

            <div
              class="fb-page"
              data-href="https://www.facebook.com/padelcrewhbg"
              data-tabs="timeline"
              data-width="300"
              data-height=""
              data-small-header="true"
              data-adapt-container-width="true"
              data-hide-cover="true"
              data-show-facepile="false"
            ></div>
          </b-col>
          <b-col md="6" sm="12">
            <!-- GRUPP PLUGINS -->
            <h2>Grupper!</h2>
            <b-row class="mt-2">
              <b-col md="12" sm="12">
                <div
                  class="fb-group"
                  data-href="https://www.facebook.com/groups/984238181586897/"
                  data-width="300"
                  data-show-social-context="true"
                  data-show-metadata="false"
                ></div>
              </b-col>
            </b-row>
            <b-row class="mt-2">
              <b-col md="12" sm="12">
                <div
                  class="fb-group"
                  data-href="https://www.facebook.com/groups/1570068356557286/"
                  data-width="300"
                  data-show-social-context="true"
                  data-show-metadata="false"
                ></div>
              </b-col>
            </b-row>
            <b-row class="mt-2">
              <b-col md="12" sm="12">
                <div
                  class="fb-group"
                  data-href="https://www.facebook.com/groups/1080060302011247/"
                  data-width="300"
                  data-show-social-context="true"
                  data-show-metadata="false"
                ></div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import AppJumbo from "../components/Jumbo";
export default {
  components: {
    AppJumbo
  },
  data() {
    return {
      headlineJumbo: "Facebook"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/globalclasses.css";
</style>
