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
                @keyup.enter="onSubmit()"
              ></b-form-input>
            </b-form-group>

            <b-alert variant="danger" v-if="getloginFailed" show
              >Inloggning misslyckades. Kontrollera e-post och
              lösenord.</b-alert
            >

            <b-button variant="primary" type="submit" @click="onSubmit"
              >Logga in</b-button
            >
            <p class="mt-3">
              <a class="link" @click="forgetPassword = true"
                >Glömt ditt lösenord?</a
              >
              |
              <a class="link" @click="handleRouting('Signup')"
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
              src="https://res.cloudinary.com/dk1b2ytfl/image/upload/c_fill,g_auto,h_250,w_1200/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative/v1594115417/gene-jeter-79nVN_Cmj3o-unsplash_tklgjn.jpg"
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
  computed: {
    getloginFailed() {
      return this.$store.getters.getloginFailed;
    }
  },
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
    handleRouting(route) {
      if (this.$router.currentRoute.path === route) {
        return;
      } else {
        this.$router.replace(route);
      }
    },
    onSubmit() {
      const formData = {
        email: this.form.email,
        password: this.form.password,
        returnSecureToken: true
      };
      this.$store.dispatch("login", formData);
    },
    onResetPassword() {
      this.showsendreseterror = false;
      const url =
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDRXKeC7nBwzeqBzfLBsz19d0AitLBLlds";

      axios
        .post(url, {
          requestType: "PASSWORD_RESET",
          email: this.resetForm.email
        })
        //GREJORNA NEDAN OM OK OCH ERROR ÄR COPY PASTE FRÅN MATCHPLAY ----------->>>>>>>>
        .then(response => {
          if (response.status === 200) {
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

<style lang="scss" scoped>
@import "../../styles/variables.scss";

.border-warning {
  border-color: #003441 !important;
}
</style>
