<template>
  <div>
    <app-jumbo :headline="headlineJumbo"></app-jumbo>

    <b-container class="container">
      <div class="background">
        <b-row class="m-1 mt-4 p-1">
          <b-col cols="12">
            <b-img
              src="https://res.cloudinary.com/dk1b2ytfl/image/upload/v1593802389/meghan-holmes-buWcS7G1_28-unsplash_1_lj8yiw.jpg"
              fluid
              alt="Sponsor image"
            ></b-img>
          </b-col>
        </b-row>
      </div>

      <div class="background">
        <b-row v-if="showBooking" class="m-1 p-1">
          <b-col cols="12">
            <h5>Du har bokat:</h5>

            <p>{{ lastClasses.date }}: {{ lastClasses.time }}</p>
            <p>Du hittar alla dina bokningar på din profil</p>
          </b-col>
        </b-row>

        <b-row class="m-1 p-1">
          <b-col cols="12">
            <h2 v-if="!isAuthenticated">Logga in för att boka</h2>
            <h5 v-else>Boka</h5>

            <div>
              <label for="example-datepicker">Filtrera på datum</label>

              <b-form-datepicker
                id="example-datepicker"
                v-model="date"
                class="mb-2"
              ></b-form-datepicker>
              <b-form-checkbox
                id="checkbox-1"
                v-model="addThreeDays"
                name="checkbox-1"
                value="true"
                unchecked-value="false"
              >
                Sök flexibelt, 3 dagar efter.
              </b-form-checkbox>
            </div>
          </b-col>
        </b-row>

        <!-- tider en dag -->
        <b-row v-if="date && !addThreeDays" class="m-1 p-1">
          <b-col sm="12" md="6">
            <div class="bg-light rounded p-3 mt-1">
              <p>
                {{ addDaysToDate(0) }}
              </p>
              <b-col cols="12" v-for="time in times" :key="time.index">
                <b-button
                  variant="primary"
                  class="mt-2"
                  :disabled="!isAuthenticated"
                  @click="onPickTime(addDaysToDate(0), time)"
                  >{{ time }}
                </b-button>
              </b-col>
            </div>
          </b-col>
        </b-row>

        <!-- tider för +tredagar -->
        <b-row v-if="date && addThreeDays" class="m-1 p-1">
          <b-col md="3">
            <div class="bg-light rounded p-3 mt-1">
              <p>{{ addDaysToDate(0) }}</p>

              <div v-for="time in times" :key="time.index">
                <b-button
                  block
                  variant="primary"
                  class="mt-2"
                  :disabled="!isAuthenticated"
                  @click="onPickTime(addDaysToDate(0), time)"
                  >{{ time }}
                </b-button>
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="bg-light rounded p-3 mt-1 ">
              <p>{{ addDaysToDate(1) }}</p>
              <div v-for="time in times" :key="time.index">
                <b-button
                  block
                  variant="primary"
                  class="mt-2"
                  :disabled="!isAuthenticated"
                  @click="onPickTime(addDaysToDate(1), time)"
                  >{{ time }}
                </b-button>
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="bg-light rounded p-3 mt-1">
              <p>{{ addDaysToDate(2) }}</p>
              <div v-for="time in times" :key="time.index">
                <b-button
                  block
                  variant="primary"
                  class="mt-2"
                  :disabled="!isAuthenticated"
                  @click="onPickTime(addDaysToDate(2), time)"
                  >{{ time }}
                </b-button>
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="bg-light rounded p-3 mt-1">
              <p>{{ addDaysToDate(3) }}</p>
              <div v-for="time in times" :key="time.index">
                <b-button
                  block
                  variant="primary"
                  class="mt-2"
                  :disabled="!isAuthenticated"
                  @click="onPickTime(addDaysToDate(3), time)"
                >
                  {{ time }}
                </b-button>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import moment from "moment";
import AppJumbo from "../components/Jumbo";

moment.locale("sv");

moment.updateLocale("sv", {
  relativeTime: {
    future: "om %s",
    past: "%s",
    ss: "%d sek",
    m: "1 minut",
    mm: "%d min",
    h: "en timme",
    hh: "%d timmar",
    d: "en dag",
    dd: "%d dagar",
    M: "en månad",
    MM: "%d mån",
    y: "ett år",
    yy: "%d år"
  }
});
export default {
  components: {
    AppJumbo
  },
  data() {
    return {
      headlineJumbo: "Boka!",
      date: "",
      times: ["10:00-11:00", "11:00-12:00", "12:00-13:00"],
      time: "",
      showBooking: false,
      addThreeDays: false,
      showBookingSuccess: false,
      showBookingError: false
    };
  },
  created() {
    //lägger till en function på Date-protoypen för datum X-dagar från ett annat datum.
    Date.prototype.addDays = function(days) {
      const date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date.toJSON();
    };
  },
  computed: {
    isAuthenticated() {
      //om personen är inloggad
      return this.$store.getters.isAuthenticated;
    },
    classes() {
      return this.$store.getters.classes;
    },
    lastClasses() {
      return this.$store.getters.user === null
        ? false
        : this.$store.getters.classes[this.$store.getters.classes.length - 1];
    }
  },
  methods: {
    addDaysToDate(days) {
      const dateTemp = new Date(this.date);
      const date = dateTemp.addDays(days);
      console.log(date);
      return moment(date).format("YYYY-MM-DD");
    },

    onPickTime(date, time) {
      this.$bvModal
        .msgBoxConfirm(`Du vill boka: ${date} klockan ${time}`, {
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

        .then(value => {
          if (!value) {
            return;
          }
          const bookingData = {
            date: this.date,
            time
          };

          this.$store.dispatch("bookClass", bookingData);
          this.showBookingSuccess = true;
          this.showBooking = true;
          this.makeToast("success");
        })
        .catch(() => {
          this.makeToast("danger");
        });
    },
    makeToast(variant = null) {
      this.$bvToast.toast(
        variant === "success"
          ? "Din bokning är bekräftad"
          : "Hoppsan! Något gick fel, försök igen.",
        {
          title: variant === "success" ? "Bokat!" : "Fel",
          variant: variant,
          solid: true
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/globalclasses.css";
.container {
  min-height: 400px;
}
</style>
