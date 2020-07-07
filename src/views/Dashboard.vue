<template>
  <div class="radient rounded-top">
    <b-container fluid class="text-white mt-5 p-4 backgroundImage">
      <b-container>
        <b-row class="m-1 p-1">
          <b-col sm="12" md="6" class="mt-4" v-if="user">
            <b-img
              :key="componentKey"
              v-if="user.imageId"
              class="mt-4 mb-2"
              :src="
                `https://res.cloudinary.com/dk1b2ytfl/image/upload/w_200,c_fill,ar_1:1,g_auto,r_max,b_rgb:003441/v1593800383/${user.imageId}.jpg`
              "
              size="8em"
            ></b-img>
            <b-avatar
              v-else
              class="mt-4 mb-2"
              variant="warning"
              size="7em"
            ></b-avatar>

            <p>
              <b-icon-person></b-icon-person> {{ user.firstname }}
              {{ user.lastname }}
            </p>
            <p><b-icon-building></b-icon-building> {{ user.club }}</p>
            <p>
              <b-icon-calendar2-check> </b-icon-calendar2-check> Din nästa
              bokning:
            </p>
            <p v-if="!lastClass">Du har inga kommande bokningar</p>
            <p v-else>{{ lastClass.date }}: {{ lastClass.time }}</p>
            <b-button variant="primary" @click="handleRouting('/boka')">
              <b-icon-plus></b-icon-plus> Boka ny tid
            </b-button>
          </b-col>
          <b-col sm="12" md="6" class="mt-4">
            <div class="chartContainer">
              <ChartContainer></ChartContainer>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <b-container class="bg-light rounded-top" fluid>
      <b-container>
        <b-row class="m-1 p-1 pt-4">
          <b-col sm="12" md="8">
            <b-tabs content-class="mt-4">
              <b-tab class="mt-1">
                <template v-slot:title>
                  <b-icon-calendar2-check class="tab-link pointer">
                  </b-icon-calendar2-check>
                  <strong class="tab-link pointer"> Mina bokningar</strong>
                </template>

                <b-row
                  class="m-1 p-1  bg-dark shadow-sm text-light rounded d-none d-sm-flex"
                >
                  <b-col md="3"><strong>Datum/tid</strong></b-col>
                  <b-col md="2"><strong>Bana</strong></b-col>
                  <b-col md="2"><strong>Övrigt</strong></b-col>
                  <b-col md="2"><strong></strong></b-col>
                </b-row>

                <b-row
                  v-for="singleClass in classes"
                  :key="singleClass.index"
                  class="bg-light border shadow-sm pt-1 m-1 rounded"
                >
                  <b-col md="3" sm="1"
                    ><p>{{ singleClass.date }}</p></b-col
                  >
                  <b-col md="3" sm="1"
                    ><p>{{ singleClass.time }}</p></b-col
                  >
                  <b-col md="2" sm="1"></b-col>
                  <b-col md="2" sm="1"></b-col>
                  <b-col md="2" sm="1" class="pointer">
                    <p
                      @click="
                        onCancel(
                          singleClass.date,
                          singleClass.time,
                          singleClass.id
                        )
                      "
                    >
                      <b-icon-trash></b-icon-trash> <span>Avboka </span>
                    </p></b-col
                  >
                </b-row>
              </b-tab>

              <b-tab class="mt-1">
                <template v-slot:title>
                  <b-icon-building class="tab-link pointer pointer">
                  </b-icon-building>
                  <strong class="tab-link pointer"> Inställningar</strong>
                </template>
                <b-row
                  class="m-1 p-1  bg-dark shadow-sm text-light rounded d-none d-sm-flex"
                >
                  <b-col md="12"><strong>Ladda upp profilbild</strong> </b-col>
                </b-row>
                <b-row class="p-1">
                  <b-col md="12">
                    <b-form-file
                      variant="primary"
                      accept=".jpg, .png"
                      class="rounded shadow-sm mb-1 border border-warning"
                      v-model="file"
                      :state="Boolean(file)"
                      placeholder="Ladda upp profilbild..."
                      drop-placeholder="Släpp bilden här..."
                    ></b-form-file>
                  </b-col>
                </b-row>
                <b-row
                  class="m-1 p-1  bg-dark shadow-sm text-light rounded d-none d-sm-flex"
                >
                  <b-col md="12"><strong>Välj din träningsort</strong> </b-col>
                </b-row>
                <b-row class="p-1">
                  <b-col cols="12">
                    <h5>
                      Din nuvarnade träningsort är
                      {{ user.club }}
                    </h5>
                  </b-col>
                </b-row>
                <b-row class="p-1">
                  <b-col cols="12">
                    <b-form-select
                      v-model="selectedNewHomeclub"
                      :options="options"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="p-1">
                  <b-col cols="12">
                    <b-alert v-if="selectedNewHomeclub" variant="success" show
                      >Favoritanläggning uppdaterad!</b-alert
                    >
                  </b-col>
                </b-row>
              </b-tab>
            </b-tabs>
            <hr />
          </b-col>

          <b-col class="mt-4" sm="12" md="4">
            <h5>Nyheter</h5>
            <div class="mt-4">
              <AppNewsfeed></AppNewsfeed>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import AppNewsfeed from "../components/Newsfeed";
import ChartContainer from "../components/ChartContainer.vue";
import axios from "axios";

export default {
  components: {
    AppNewsfeed,
    ChartContainer
  },
  data() {
    return {
      componentKey: 0,
      file: null,
      newImage: true,

      //Till byta favoritanlärrning
      selectedNewHomeclub: null,
      options: ["Helsingborg", "Lund", "Landskrona", "Malmö"]
    };
  },
  computed: {
    user() {
      return this.$store.getters.user === null
        ? false
        : this.$store.getters.user;
    },
    classes() {
      if (this.$store.getters.classes === null) {
        return false;
      } else {
        return this.$store.getters.classes;
      }
    },
    lastClass() {
      //OBS! RETUNERAR DEN SENAST TILLAGDA EJ ENLIGT DATUM  ---------------------------------------------->>>>>>>!!!!>>>>>
      if (this.$store.getters.classes === null) {
        return false;
      } else {
        return this.$store.getters.classes[
          this.$store.getters.classes.length - 1
        ];
      }
    }
  },
  methods: {
    handleRouting(route) {
      if (this.$router.currentRoute.path === route) {
        return;
      } else {
        this.$router.replace(route);
      }
    },
    forceRerender() {
      this.componentKey += 1;
    },
    onCancel(date, time, id) {
      this.$bvModal
        .msgBoxConfirm(`Du vill avboka: ${date}, ${time} (ID: ${id})`, {
          title: "Boka tid",
          size: "s",
          buttonSize: "md",
          okVariant: "primary",
          okTitle: "Japp, jag är säker",
          cancelTitle: "Nej tack",
          cancelVariant: "dark",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true
        })
        .then(() => {
          this.$store.dispatch("cancelClass", id);
        });
    },
    onUpload() {
      const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dk1b2ytfl/image/";
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("upload_preset", "lrdgao6b");

      axios
        .post(CLOUDINARY_URL + "upload", formData)
        .then(response => {
          const imageId = response.data.public_id;
          const imageUrl = response.data.secure_url;
          this.$store.dispatch("updateUser", { imageUrl, imageId });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  watch: {
    selectedNewHomeclub: {
      handler() {
        this.$store.dispatch("updateUser", { club: this.selectedNewHomeclub });
      }
    },
    file: {
      handler() {
        this.onUpload();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/globalclasses.css";

.tab-link {
  font-weight: 700;
  color: black !important;
  text-transform: uppercase;
}

.radient {
  background-color: #003441;
}

.chartContainer {
  max-width: 350px;
}

.TEMPGREYIMAGE {
  filter: grayscale(100%);
}
</style>
