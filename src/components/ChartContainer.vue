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
  computed: {
    classes() {
      return this.$store.getters.classes;
    }
  },

  data() {
    return {
      //data för line-chart. Uppdaters med fillData()
      chartData: null,
      datacollection: null,
      gradient: null,
      label: [
        "Januari",
        "Februari",
        "Mars",
        "April",
        "Maj",
        "Juni",
        "Juli",
        "Augusti",
        "September",
        "Oktober",
        "November",
        "December"
      ],
      dataLabel: "Bokade pass senaste månaden",
      //options för line-chart
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
    //Hämtar en referens till vancas och använder den för att skapa gradient förger.
    this.gradient = this.$children[0].$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient.addColorStop(0, "rgba(0, 166, 133, 0.9)");
    this.gradient.addColorStop(0.5, "rgba(0, 166, 133, 0.25)");
    this.gradient.addColorStop(1, "rgba(0, 166, 133, 0)");

    setTimeout(() => {
      this.fillData();
    }, 1000);
  },
  methods: {
    fillData() {
      this.chartDataMethod();
      this.datacollection = {
        labels: this.label,
        datasets: [
          {
            label: this.dataLabel,
            backgroundColor: this.gradient,
            data: this.chartData,
            borderColor: "rgb(0, 166, 133)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "white"
          }
        ]
      };
    },
    chartDataMethod() {
      const classes = this.classes;
      const dates = [];
      for (const key in classes) {
        dates.push(classes[key].date);
      }

      let months = [];
      dates.forEach(date => {
        const month = date
          .split("-")
          .splice(1, 1)
          .join();
        months.push(month);
      });

      const sanitizedMonths = [];
      months.forEach(month => {
        const sanitizedMonth = month
          .split("")
          .splice(1, 1)
          .join();
        sanitizedMonths.push(sanitizedMonth);
      });

      let counts = {};
      sanitizedMonths.forEach(month => {
        counts[month] = (counts[month] || 0) + 1;
      });

      const chartData = [];
      for (let index = 0; index <= 12; index++) {
        if (counts[index] !== undefined) {
          chartData[index - 1] = counts[index];
        } else {
          chartData[index] = 0;
        }
      }

      this.chartData = chartData;
    }
  },
  watch: {
    classes: {
      handler() {
        this.fillData();
      }
    }
  }
};
</script>

<style></style>
