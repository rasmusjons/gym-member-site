<template>
  <div>
    <b-container>
      <b-row class="m-1 p-1">
        <b-col>
          <h1>Dashboard</h1>
          <p>User data:</p>
          <p>{{ user }}</p>

          <b-tabs content-class="mt-3">
            <b-tab title="Träningar" active>
              <ul v-for="singleClass in classes" :key="singleClass.index">
                <li>{{ singleClass }}</li>
              </ul>
            </b-tab>
            <b-tab title="Kvitton"><p>I'm a disabled tab!</p></b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
    classes() {
      return this.$store.getters.user.classes;
    }
  },
  created() {
    //OBS! FAKE DATAN I STOREN SKRivEr ÖVER EV. TEST-BOKNINGAR NÄR fetchUser körs.
    this.$store.dispatch("fetchUser");
  }
};
</script>
