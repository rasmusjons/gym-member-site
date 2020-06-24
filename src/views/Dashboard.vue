<template>
  <div class="bg-dark rounded-top ">
    <b-container fluid class="text-white mt-5 p-4 backgroundImage">
      <b-container>
        <b-row class="m-1 p-1">
          <b-col cols="12">
            <b-avatar
              src="https://andaluciainformacion.es/media/776735/juan-lebron-ser-el-numero-uno-del-mundo-no-me-cambio-la-vida-.jpg"
              size="7rem"
            ></b-avatar>
            <p>{{ user.name }}</p>
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

          <hr />
        </b-row>
      </b-container>
    </b-container>

    <b-container class="bg-light rounded-top" fluid>
      <b-container>
        <b-row class="m-1 p-1 pt-4">
          <b-col cols="12">
            <b-tabs content-class="mt-4" pills>
              <b-tab active class="mt-1">
                <template v-slot:title>
                  <b-icon-calendar2-check> </b-icon-calendar2-check>
                  <strong> Mina bokningar</strong>
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
                      class="link"
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
              <b-tab title="Kvitton" class="m-1">
                <b-icon-calendar2-check> </b-icon-calendar2-check>
                <strong>Kvitton</strong>
              </b-tab>
            </b-tabs>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      //return this.$store.getters.user;
      //FEJKDATA NEDAN
      const user = {
        name: "Rasmus Jonsson",
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
    this.$store.dispatch("fetchUser");
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

<style scoped>
.bg-dark {
  background-color: black !important;
}
</style>
