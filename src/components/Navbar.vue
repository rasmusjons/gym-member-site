<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <b-navbar toggleable="lg" type="dark" variant="dark" transparent>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item class="m-1" @click="handleRouting('/')"
                  >Hem</b-nav-item
                >
                <b-nav-item class="m-1" @click="handleRouting('/boka')"
                  >Boka</b-nav-item
                >

                <b-nav-item
                  v-if="isAdmin.admin"
                  class="m-1"
                  @click="handleRouting('/admin')"
                  >Admin</b-nav-item
                >

                <b-nav-item
                  v-if="isAuthenticated"
                  @click="handleRouting('/dashboard')"
                  class="m-1"
                >
                  Min Sida
                </b-nav-item>

                <b-nav-item
                  v-if="!isAuthenticated"
                  class="m-1"
                  @click="handleRouting('/user')"
                  >Logga in</b-nav-item
                >

                <b-nav-item v-if="isAuthenticated" class="m-1" @click="onLogout"
                  >Logga ut</b-nav-item
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
    },
    isAdmin() {
      return !this.$store.getters.user ? false : this.$store.getters.user;
    }
  },
  data() {
    return {};
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    },
    handleRouting(route) {
      if (this.$router.currentRoute.path === route) {
        return;
      } else {
        this.$router.replace(route);
      }
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
