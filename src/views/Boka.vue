<template>
  <b-container class="container">
    <b-row v-if="showBooking" class="m-1 p-1">
      <b-col cols="12">
        <h5>Mina bokningar:</h5>
        <p>{{ "computed classes" }}</p>
      </b-col>
    </b-row>

    <b-row class="m-1 p-1">
      <b-col cols="12">
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
          <h5>
            Lediga tider.
            <span v-if="isAuthenticated">Logga in för att boka!</span>
          </h5>
          <b-col cols="12" v-for="time in times" :key="time.index">
            <b-button
              variant="primary"
              class="mt-2"
              :disabled="isAuthenticated"
              @click="onPickTime(addDaysToDate(0), time)"
              >Time: {{ time }}
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
              :disabled="isAuthenticated"
              @click="onPickTime(addDaysToDate(0), time)"
              >{{ time }}: Bana A.
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
              :disabled="isAuthenticated"
              @click="onPickTime(addDaysToDate(1), time)"
              >{{ time }}: Bana A.
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
              :disabled="isAuthenticated"
              @click="onPickTime(addDaysToDate(2), time)"
              >{{ time }}: Bana A.
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
              :disabled="isAuthenticated"
              @click="onPickTime(addDaysToDate(3), time)"
            >
              {{ time }}: Bana A.
            </b-button>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import moment from "moment";

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
  data() {
    return {
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
      return this.$store.getters.isAuthenticated;
    },
    classes() {
      return this.$store.getters.user.classes;
    }
  },
  methods: {
    addDaysToDate(days) {
      const dateTemp = new Date(this.date);
      const date = dateTemp.addDays(days);
      console.log(date);
      return moment(date).format("YYYY-MM-DD");
    },
    getClasses() {
      //hämtar datum för valt datum samt plus tre dagar.
      this.addThreeDays = true;
      if (this.addThreeDays) {
        const threeDays = 3;
        const dates = [];

        const date = new Date(this.date);

        //bygger ihop en datum lista med fyra datum.
        for (let index = 0; index <= threeDays; index++) {
          dates.push(date.addDays(index));
        }
        console.log(dates);
        // göra fyra anrop.
        dates.forEach(date => {
          this.axios
            .post("http://localhost:3002/users", date)
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
        });
      } else {
        //hämtar data för valt datum
        this.axios
          .post("http://localhost:3002/users")
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      }
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
        .then(() => {
          // const bookingData = {
          //   date: this.date,
          //   time
          // };
          // this.$store.dispatch("bookClass", bookingData);
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

<style scoped>
.container {
  min-height: 400px;
}
</style>
