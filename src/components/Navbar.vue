<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <b-navbar toggleable="lg" type="dark" variant="dark" transparent>
            <b-img
              class="btn"
              @click="$router.push('/')"
              src="http://www.padelcrew.se/wp-content/uploads/2014/10/padel-crew-logo-long.png"
            />

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item class="m-1" @click="$router.push('/boka')"
                  >Boka</b-nav-item
                >
                <b-nav-item class="m-1" @click="$router.push('/priser')"
                  >Priser</b-nav-item
                >
                <b-nav-item class="m-1" @click="$router.push('/tavling')"
                  >Tävlingar</b-nav-item
                >
                <b-nav-item class="m-1" href="#">Arenor</b-nav-item>
                <b-nav-item
                  class="m-1"
                  href="#"
                  @click="$router.push('/facebook')"
                  >Facebook</b-nav-item
                >
                <b-nav-item
                  class="m-1"
                  href="#"
                  @click="$router.push('/regler')"
                  >Regler</b-nav-item
                >
                <b-nav-item class="m-1" href="#" @click="$router.push('/skola')"
                  >Padel i skolan</b-nav-item
                >
                <b-nav-item class="m-1" href="#"
                  >Padel Crew Padelklubb</b-nav-item
                >
                <b-nav-item
                  class="m-1"
                  href="#"
                  @click="$router.push('/kontakter')"
                  >Kontakta oss</b-nav-item
                >
              </b-navbar-nav>
              <b-navbar-nav v-if="isAuthenticated">
                <b-nav-item class="m-1">
                  <b-avatar
                    button
                    @click="$router.push('/dashboard')"
                    variant="warning"
                  ></b-avatar>
                </b-nav-item>
              </b-navbar-nav>
              <b-navbar-nav v-if="isAuthenticated">
                <b-nav-item class="m-1" @click="onLogout">Logga ut</b-nav-item>
              </b-navbar-nav>
              <b-navbar-nav v-if="!isAuthenticated">
                <b-nav-item class="m-1" @click="$router.push('/user')"
                  >Logga in</b-nav-item
                >
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  data() {
    return {};
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.nav-link {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
}
.nav-link:hover {
  background-color: #ffffff26;
  opacity: 1;
  border-radius: 4px;
  color: $padelorange !important;
  transition: 0.3s;
}

// .active {
//   background-color: $padelorange;
//   color: white !important;
//   opacity: 1;
//   border-radius: 4px;
// }
</style>
