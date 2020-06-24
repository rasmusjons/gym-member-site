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
          <img class="img" src="../assets/Facebook.png" />
          <img class="img" src="../assets/Instagram.png" />
          <img class="img" src="../assets/LinkedIN.png" />
          <img class="img" src="../assets/Twitter.png" />
          <img class="img" src="../assets/Youtube.png" />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="8"></b-col>
        <b-col cols="4">
          <b-img
            src="http://www.padelcrew.se/wp-content/uploads/2014/10/padel-crew-logo-long@2x.png"
            fluid-grow
            alt="Fluid-grow image"
          ></b-img>
        </b-col>
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
  background-color: black;
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
