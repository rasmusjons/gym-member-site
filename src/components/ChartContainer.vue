<template>
  <div>
    <line-chart :chart-data="datacollection" :options="options"></line-chart>
  </div>
</template>

<script>
import LineChart from "../LineChart";

export default {
  components: {
    LineChart
  },
  created() {
    //hämta lite data :)
    // this.$store.getters.user.classes
    this.data = [0, 2, 3, 2, 1, 2, 4];
  },
  data() {
    return {
      datacollection: null,
      gradient: null,
      label: [0, 5, 10, 15, 20, 25, 30],
      dataLabel: "Spelade matcher senaste månaden",
      data: null,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          display: true
        },
        tooltips: {
          enabled: false
        }
      }
    };
  },
  mounted() {
    this.gradient = this.$children[0].$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(247, 149, 0, 0.9)");
    this.gradient.addColorStop(0.5, "rgba(247, 149, 0, 0.25)");
    this.gradient.addColorStop(1, "rgba(247, 149, 0, 0)");

    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: this.label,
        datasets: [
          {
            label: this.dataLabel,
            backgroundColor: this.gradient,
            data: this.data,
            borderColor: "rgb(247, 149, 0)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "white"
          }
        ]
      };
    }
  }
};
</script>

<style></style>
