<template>
  <div>
    <b-container>
      <b-row class="m-1 p-1">
        <b-col md="6" sm="12">
          <h1>Registrera ny användare</h1>
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
              :state="$v.form.lastname.$dirty ? !$v.form.lastname.$error : null"
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

          <b-form-group id="input-group-4" label="Mobilnummer">
            <b-form-input
              class="rounded shadow-sm  border border-warning"
              v-model="form.mobile"
              placeholder="Mobilnummer"
              @input="$v.form.mobile.$touch"
              :state="$v.form.mobile.$dirty ? !$v.form.mobile.$error : null"
            ></b-form-input
          ></b-form-group>

          <b-form-group
            id="input-group-5"
            label="Anläggning:"
            description="Välj din favoritanläggning så att vi kan skräddarsy innehållet på sidan åt dig"
          >
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

          <b-form-file
            variant="primary"
            accept=".jpg, .png"
            class="rounded shadow-sm mb-1 border border-warning"
            v-model="form.file"
            :state="Boolean(form.file)"
            placeholder="Ladda upp profilbild..."
            drop-placeholder="Släpp bilden här..."
          ></b-form-file>
          <b-button
            class="mb-1"
            variant="primary"
            type="submit"
            :disabled="$v.$invalid"
            @click="onSubmit"
            >Registrera</b-button
          >
        </b-col>
      </b-row>

      <!-- VALIDATE OBJECTET: -->
      <p hidden>{{ $v.form.club }}</p>
    </b-container>
  </div>
</template>

<script>
import {
  required,
  email,
  sameAs,
  minLength,
  numeric
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      clubs: ["Helsingborg", "Landskrona", "Scandic Nord Arena", "Ängelholm"],
      form: {
        club: "",
        email: "rasmus@gmail.com",
        file: null,
        firstname: "Rasmus",
        lastname: "Jonsson",
        mobile: "123123",
        password1: "123123",
        password2: "123123"
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
      mobile: {
        required,
        numeric
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
      const formData = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("signup", formData);
    }
  }
};
</script>

<style scoped>
.dropZone {
  color: #034a4a;
  min-height: 200px;
  width: 70%;
  margin: auto;
  background: #bedce0;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
  outline: 2px dashed #034a4a9c;
  outline-offset: -5px;
  text-align: center;
}
</style>
