<template>
  <div>
    <app-jumbo :headline="headlineJumbo"></app-jumbo>

    <b-container>
      <div class="background">
        <b-row class="m-1 p-1" v-if="!forgetPassword">
          <b-col cols="12">
            <h2>Logga in</h2>
            <b-form-group id="input-group-1" label="E-post:">
              <b-form-input
                label="E-post"
                class="rounded shadow-sm mb-1 border border-warning"
                v-model="form.email"
                placeholder="E-post"
                @input="$v.form.email.$touch"
                :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Lösenord:">
              <b-form-input
                class="rounded shadow-sm mb-1 border border-warning"
                type="password"
                v-model="form.password"
                placeholder="Lösenord"
              ></b-form-input>
            </b-form-group>

            <b-button variant="primary" type="submit" @click="onSubmit"
              >Logga in</b-button
            >
            <p class="mt-3">
              <a class="link" @click="forgetPassword = true"
                >Glömt ditt lösenord?</a
              >
              |
              <a class="link" @click="$router.push('Signup')"
                >Registrera ny användare</a
              >
            </p>
          </b-col>
        </b-row>

        <b-row class="m-1 p-1" v-if="forgetPassword">
          <b-col cols="12">
            <b-form-group
              id="input-group-1"
              label="E-post:"
              description="Skriv in e-postadressen du registrera ditt konto med"
            >
              <b-form-input
                class="rounded shadow-sm mb-1 border border-warning"
                v-model="resetForm.email"
                placeholder="E-post"
                @input="$v.resetForm.email.$touch"
                :state="
                  $v.resetForm.email.$dirty ? !$v.resetForm.email.$error : null
                "
              ></b-form-input>
            </b-form-group>
            <b-button variant="primary" type="submit" @click="onResetPassword"
              >Återställ Lösenord
            </b-button>
            <b-alert
              v-if="showSendResetError"
              variant="warning"
              show
              class="mt-4 small form-text text-muted"
              >Din e-post stämmer inte, försök igen.</b-alert
            >
            <b-alert
              v-if="showSendResetSuccess"
              variant="success"
              show
              class="mt-4 small form-text text-muted"
              >Ett email har skickats med instruktioner om hur du byter
              lösenord.</b-alert
            >
          </b-col>
        </b-row>

        <b-row class="m-1 p-1">
          <b-col cols="12">
            <b-img
              src="http://www.padelcrew.se/wp-content/uploads/2014/10/arenor-bg-1024x363.jpg"
              fluid
              alt="Responsive image"
            ></b-img>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import axios from "axios";
import AppJumbo from "../Jumbo.vue";

export default {
  components: {
    AppJumbo
  },
  data() {
    return {
      headlineJumbo: "Logga in",
      form: {
        email: "",
        password: ""
      },
      resetForm: {
        email: ""
      },
      forgetPassword: false,
      showSendResetError: false,
      showSendResetSuccess: false
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("login", formData);
    },
    onResetPassword() {
      console.log(this.resetForm.email);
      this.showsendreseterror = false;
      const url = "http://localhost:3002/users";

      axios
        .post(url, {
          email: this.resetForm.email
        })
        //GREJORNA NEDAN OM OK OCH ERROR ÄR COPY PASTE FRÅN MATCHPLAY ----------->>>>>>>>
        .then(response => {
          if (response.data.status === "error") {
            return;
          } else if (response.data.status === "ok") {
            this.showSendResetSuccess = true;
          } else {
            this.showSendResetError = true;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      }
    },
    resetForm: {
      email: {
        required,
        email
      }
    }
  }
};
</script>
