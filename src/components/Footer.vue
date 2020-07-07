<template>
  <div class="footer">
    <b-container footer>
      <b-row>
        <b-col cols="8">
          <h3>Detta är vår kontaktinfo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            quaerat! I
          </p>
        </b-col>
        <b-col cols="4">
          <img
            class="img m-1"
            src="https://res.cloudinary.com/dk1b2ytfl/image/upload/v1593602602/Facebook_ahtlhs.png"
          />
          <img
            class="img m-1"
            src="https://res.cloudinary.com/dk1b2ytfl/image/upload/v1593602602/LinkedIN_sk45lt.png"
          />
          <img
            class="img m-1"
            src="https://res.cloudinary.com/dk1b2ytfl/image/upload/v1593602602/Twitter_fueh0d.png"
          />
          <img
            class="img m-1"
            src="https://res.cloudinary.com/dk1b2ytfl/image/upload/v1593602602/Youtube_sn71mw.png"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="8"></b-col>
        <b-col cols="4"> </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.footer {
  background-color: #00a685;
  color: white;
  height: auto;
  width: 100%;
  margin-top: 40px;
  padding: 20px;
}

.img {
  width: 40px;
  height: 40px;
}

.brand {
  width: 200px;
  height: 150px;
  margin-top: 20px;
}
</style>
