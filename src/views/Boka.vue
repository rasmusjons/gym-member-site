<template>
  <b-container class="container">
    <b-row class="m-1 p-1">
      <b-col cols="12">
        <div>
          <button @click="getClasses">getclasses</button>
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
    <b-row v-if="date" class="m-1 p-1">
      <b-col cols="12">
        <h5>
          Lediga tider.
          <span v-if="!isAuthenticated">Logga in för att boka!</span>
        </h5>
        <b-col cols="12" v-for="time in times" :key="time.index">
          <b-button
            variant="primary"
            class="m-2"
            :disabled="isAuthenticated"
            @click="onPickTime(time)"
            >Time: {{ time }}
          </b-button>
        </b-col>
      </b-col>
    </b-row>
    <b-row v-if="showBooking" class="m-1 p-1">
      <b-col cols="12">
        <h5>Mina bokningar:</h5>
        <p>{{ classes }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      times: ["10:00-11:00", "11:00-12:00", "12:00-13:00"],
      time: "",
      showBooking: false,
      addThreeDays: false
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
    getClasses() {
      //hämtar datum för valt datum samt plus tre dagar.
      this.addThreeDays = true;
      if (this.addThreeDays) {
        const threeDays = 3;
        const dates = [];

        //lägger till en functino på Date-protoypen för datum X-dagar från ett annat datum.
        Date.prototype.addDays = function(days) {
          var date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date.toJSON();
        };

        var date = new Date(this.date);

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
          .post("http://localhost:3002/users", date)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    onPickTime(time) {
      this.$bvModal
        .msgBoxConfirm(`Du vill boka: ${this.date} klockan ${time}`, {
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
          const bookingData = {
            date: this.date,
            time
          };
          this.$store.dispatch("bookClass", bookingData);
          this.showBooking = true;
        });
    }
  }
};
</script>

<style scoped>
.container {
  min-height: 400px;
}
</style>
