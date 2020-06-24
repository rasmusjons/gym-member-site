<template>
  <b-container class="container">
    <b-row class="m-1 p-1">
      <b-col cols="12">
        <div>
          <label for="example-datepicker">Filtrera på datum</label>

          <b-form-datepicker
            id="example-datepicker"
            v-model="date"
            class="mb-2"
          ></b-form-datepicker>
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
            :disabled="!isAuthenticated"
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
      showBooking: false
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
