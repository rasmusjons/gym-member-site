<template>
  <div class="radient rounded-top ">
    <b-container fluid class="text-white mt-5 p-4 backgroundImage">
      <b-container>
        <b-row class="m-1 p-1">
          <b-col sm="12" md="6" class="mt-4">
            <b-avatar
              class="mt-4 mb-2 TEMPGREYIMAGE"
              src="https://andaluciainformacion.es/media/776735/juan-lebron-ser-el-numero-uno-del-mundo-no-me-cambio-la-vida-.jpg"
              size="8em"
            ></b-avatar>
            <p><b-icon-person></b-icon-person> {{ user.name }}</p>
            <p><b-icon-building></b-icon-building> {{ user.homeClubb }}</p>
            <p>
              <b-icon-calendar2-check> </b-icon-calendar2-check> Din nästa
              bokning:
            </p>
            <p>
              {{ lastClass.club }}: {{ lastClass.date }} {{ lastClass.time }}
            </p>
            <b-button variant="primary" @click="$router.push('/boka')">
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
                  <b-icon-calendar2-check class="tab-link">
                  </b-icon-calendar2-check>
                  <strong class="tab-link"> Mina bokningar</strong>
                </template>
                <b-row
                  class="m-1 p-1  bg-dark shadow-sm text-light rounded d-none d-sm-flex"
                >
                  <b-col md="3"><strong>Plats</strong></b-col>
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
                    ><p>{{ singleClass.club }}</p></b-col
                  >
                  <b-col md="3" sm="1"
                    ><p>
                      {{ singleClass.date }}: {{ singleClass.time }}
                    </p></b-col
                  >
                  <b-col md="2" sm="1"
                    ><p>{{ singleClass.court }}</p></b-col
                  >
                  <b-col md="2" sm="1"></b-col>
                  <b-col md="2" sm="1">
                    <p
                      @click="
                        onCancel(
                          singleClass.club,
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
                  <b-icon-receipt class="tab-link"> </b-icon-receipt>
                  <strong class="tab-link"> Kvitton</strong>
                </template>
              </b-tab>
              <b-tab class="mt-1">
                <template v-slot:title>
                  <b-icon-building class="tab-link"> </b-icon-building>
                  <strong class="tab-link"> Din favoritanläggning</strong>
                </template>
                <b-row
                  class="m-1 p-1  bg-dark shadow-sm text-light rounded d-none d-sm-flex"
                >
                  <b-col md="12"
                    ><strong>Välj din favoritanläggning nedan</strong>
                  </b-col>
                </b-row>
                <b-row class="p-1">
                  <b-col cols="12">
                    <h5>
                      Din nuvarnade favoritanläggning är
                      {{ user.homeClubb }}
                    </h5>
                  </b-col>
                </b-row>
                <b-row class="p-1">
                  <b-col cols="12">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="p-1">
                  <b-col cols="12">
                    <b-alert v-if="selected" variant="success" show
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

export default {
  components: {
    AppNewsfeed,
    ChartContainer
  },
  data() {
    return {
      //Till byta favoritanlärrning
      selected: null,
      options: ["Helsingborg", "Landskrona", "Scandic Nord Arena", "Ängelholm"]
    };
  },
  computed: {
    user() {
      //tänker att den hämtar datan från store så att den är tillgängli på hela appen.

      //return this.$store.getters.user;
      //FEJKDATA NEDAN
      const user = {
        name: "user.name",
        homeClubb: "user.homeClub på user-object",
        classes: [
          {
            id: "123123",
            club: "Helsingborg Padel Center",
            date: "2020-12-31",
            time: "12:00 - 13:00",
            court: "Bana A"
          },
          {
            id: "456456",
            club: "Landskrona Padel Center",
            date: "2020-12-31",
            time: "11:00 - 13:00",
            court: "Bana b"
          }
        ]
      };
      const devData = user;
      return devData;
    },
    classes() {
      //tänker att den hämtar datan från store så att den är tillgängli på hela appen.
      // return this.$store.getters.user.classes
      //FEJKDATA NEDAN
      const user = {
        name: "Rasmus",
        classes: [
          {
            id: "123123",
            club: "Helsingborg Padel Center",
            date: "2020-12-31",
            time: "12:00 - 13:00",
            court: "Bana A"
          },
          {
            id: "456456",
            club: "Landskrona Padel Center",
            date: "2020-12-31",
            time: "11:00 - 13:00",
            court: "Bana b"
          }
        ]
      };
      const devData = user.classes;
      return devData;
    },
    lastClass() {
      //OBS! RETUNERAR DEN SENAST TILLAGDA EJ ENLIGT DATUM  ---------------------------------------------->>>>>>>!!!!>>>>>
      return this.classes[this.classes.length - 1];
    }
  },
  created() {
    //OBS! FAKE DATAN I STOREN SKRivEr ÖVER EV. TEST-BOKNINGAR NÄR fetchUser körs.
    // this.$store.dispatch("fetchUser");
  },
  methods: {
    onCancel(club, date, time, id) {
      this.$bvModal
        .msgBoxConfirm(`Du vill avboka: ${club}, ${date}, ${time} ID: ${id}`, {
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
          console.log(id);
          this.$store.dispatch("cancelClass", id);
        });
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
  cursor: pointer;
}

.radient {
  background: radial-gradient(
    ellipse at center,
    rgba(41, 41, 41, 1) 0%,
    rgba(38, 38, 38, 1) 20%,
    rgba(20, 20, 20, 1) 51%,
    rgba(0, 0, 0, 1) 100%
  );
}

.chartContainer {
  max-width: 350px;
}

.TEMPGREYIMAGE {
  filter: grayscale(100%);
}
</style>
