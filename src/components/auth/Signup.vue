<template>
  <div>
    <app-jumbo :headline="headlineJumbo"></app-jumbo>

    <b-container>
      <div class="background">
        <b-row class="m-1 p-1">
          <b-col md="6" sm="12">
            <h2>Registrera ny användare</h2>
            <b-form-group id="input-group-1" label="Förnamn:">
              <b-form-input
                autofocus
                class="rounded shadow-sm mb-1 border border-warning"
                v-model="form.firstname"
                placeholder="Förnamn"
                @input="$v.form.firstname.$touch"
                :state="
                  $v.form.firstname.$dirty ? !$v.form.firstname.$error : null
                "
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Efternamn:"
              ><b-form-input
                class="rounded shadow-sm mb-1 border border-warning"
                v-model="form.lastname"
                placeholder="Efternamn"
                @input="$v.form.lastname.$touch"
                :state="
                  $v.form.lastname.$dirty ? !$v.form.lastname.$error : null
                "
              ></b-form-input
            ></b-form-group>

            <b-form-group id="input-group-3" label="E-post:"
              ><b-form-input
                class="rounded shadow-sm border border-warning"
                v-model="form.email"
                placeholder="E-post"
                @input="$v.form.email.$touch"
                :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
              ></b-form-input
            ></b-form-group>

            <b-form-group id="input-group-5" label="Träningsort:">
              <b-form-radio
                v-for="(club, index) in clubs"
                :key="club.index"
                variant="primary"
                :value="club"
                v-model="form.club"
                name="radio"
                @blur="$v.clubs.$each[index].value.$touch()"
                :state="$v.form.club.required ? true : null"
                >{{ club }}
              </b-form-radio>
            </b-form-group>

            <b-form-group
              id="input-group-6"
              label="Lösenord"
              description="Minst 6 tecken"
            >
              <b-form-input
                class="rounded shadow-sm  border border-warning"
                type="password"
                v-model="form.password1"
                placeholder="Lösenord"
                @input="$v.form.password1.$touch"
                :state="
                  $v.form.password1.$dirty ? !$v.form.password1.$error : null
                "
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-7"
              label="Upprepa lösenord"
              description="Minst 6 tecken"
            >
              <b-form-input
                class="rounded shadow-sm  border border-warning"
                type="password"
                v-model="form.password2"
                placeholder="Repetera lösenord"
                @input="$v.form.password2.$touch"
                :state="
                  $v.form.password2.$dirty ? !$v.form.password2.$error : null
                "
              ></b-form-input>
            </b-form-group>

            <b-button
              class="mb-1"
              variant="primary"
              type="submit"
              :disabled="$v.$invalid"
              @click="onSubmit"
              >Registrera</b-button
            >
            <b-alert class="mt-4" variant="danger" show v-if="loginfailed"
              >Inloggning misslyckades</b-alert
            >
          </b-col>
        </b-row>
        <!-- VALIDATE OBJECTET: -->
        <p hidden>{{ $v.form.club }}</p>
      </div>
    </b-container>
  </div>
</template>

<script>
import { required, email, sameAs, minLength } from "vuelidate/lib/validators";

import AppJumbo from "../Jumbo";

export default {
  computed: {
    loginfailed() {
      return this.$store.getters.getloginFailed;
    }
  },
  components: {
    AppJumbo
  },
  data() {
    return {
      headlineJumbo: "Registrering",
      clubs: ["Helsingborg", "Lund", "Landskrona", "Malmö"],
      form: {
        club: null,
        email: null,
        firstname: null,
        lastname: null,
        password1: null,
        password2: null,
        imageId: "user_eavri5",
        imageUrl:
          "https://res.cloudinary.com/dk1b2ytfl/image/upload/v1594121341/user_eavri5_du7q9w.jpg",
        classes: []
      }
    };
  },
  validations: {
    form: {
      club: {
        required
      },
      email: {
        required,
        email
      },
      firstname: {
        required,
        minLength: minLength(2)
      },
      lastname: {
        required,
        minLength: minLength(2)
      },
      password1: {
        required,
        minLength: minLength(6)
      },
      password2: {
        sameAsPassword: sameAs("password1")
      }
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("signup", this.form);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

.border-warning {
  border-color: #003441 !important;
}
</style>
