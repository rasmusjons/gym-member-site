<template>
  <div>
    <app-jumbo :headline="headlineJumbo"></app-jumbo>
    <b-container>
      <div class="background">
        <b-row class="m-1 mt-4 p-1">
          <b-col cols="12">
            <b-img
              src="https://res.cloudinary.com/dk1b2ytfl/image/upload/v1593802389/meghan-holmes-buWcS7G1_28-unsplash_1_lj8yiw.jpg"
              fluid
              alt="Sponsor image"
            ></b-img>
          </b-col>
        </b-row>
        <b-row class="m-1 p-1">
          <b-col class="mt-1" md="8">
            <b-row class="mt-1 pt-1">
              <b-col md="12" sm="12">
                <div>
                  <b-button
                    v-b-toggle.sidebar-backdrop
                    class="mt-4 p-2"
                    variant="info"
                    >Nyheter!</b-button
                  >
                  <b-sidebar
                    id="sidebar-backdrop"
                    title="Nyheter"
                    backdrop
                    shadow
                  >
                    <div class="px-3 py-2">
                      <AppNewsfeed></AppNewsfeed>
                    </div>
                  </b-sidebar>
                </div>
                <hr />
              </b-col>
            </b-row>
            <b-row class="mt-1 pt-1">
              <b-col md="12" sm="12">
                <h2>Info och spelregler</h2>
                <p>
                  COPY PASTE FRÅN PADELCREW.SE Info och spelregler: 6-lag i
                  varje pool. Innebär 5 matcher per omgång. 2 lag går upp 2 lag
                  åker ur och 2 stannar kvar. Matcherna spelas i bäst av tre
                  set. Vid 1-1 i set avgörs matchen i super tiebreak, om man
                  bedömer att man inte hinner spela ett vanligt tredje set.
                  Matchen får aldrig ta mer än 90 min. Pris: Kostnaden för en
                  omgång är 1 400kr/lag och man kan bara säga upp sin plats i
                  sista omgången innan sommaren och innan jul. Vinnaren i varje
                  serie vinner ett presentkort (kan hämtas ut senast sex veckor
                  efter avslutad omgång). Tävlingsregler: Besök vår sida för
                  tävlingsregler för aktuella regler. Aktuellt spelscheman:
                  Besök Helsingborg Padel League och Ladies Padel League för
                  aktuella spelscheman.
                </p>
                <hr
              /></b-col>
            </b-row>
            <b-row class="mt-1 pt-1">
              <b-col sm="3" md="12">
                <h2>Lediga platser</h2>
                <div>
                  <b-card-group deck>
                    <b-card
                      v-for="vacancy in vacancies"
                      :key="vacancy.index"
                      bg-variant="dark"
                      text-variant="white"
                      :header="vacancy.name"
                      class="text-center"
                    >
                      <b-card-text class="d-inline-block">{{
                        vacancy.vacancies
                      }}</b-card-text>
                    </b-card>
                  </b-card-group>
                </div>
                <hr />
              </b-col>
            </b-row>
          </b-col>

          <b-col class="mt-1" md="4" sm="12">
            <h2>Anmäl ditt lag!</h2>
            <b-form-group id="input-group-1" label="Lagnamn:">
              <b-form-input
                class="rounded shadow-sm mb-1 border border-warning"
                v-model="form.teamName"
                placeholder="Lagnamn"
                @input="$v.form.teamName.$touch"
                :state="
                  $v.form.teamName.$dirty ? !$v.form.teamName.$error : null
                "
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Liga:"
              description="Välj den liga somn passar dig"
            >
              <b-form-radio
                v-for="(league, index) in leagues"
                :key="league.index"
                variant="primary"
                :value="league"
                v-model="form.league"
                name="radio1"
                @blur="$v.league.$each[index].value.$touch()"
                :state="$v.form.league.required ? true : null"
                >{{ league }}
              </b-form-radio>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Medspelares förnamn och efternamn:"
            >
              <b-form-input
                class="rounded shadow-sm mb-1 border border-warning"
                v-model="form.teamMemberFirstName"
                placeholder="Förnamn"
                @input="$v.form.teamMemberFirstName.$touch"
                :state="
                  $v.form.teamMemberFirstName.$dirty
                    ? !$v.form.teamMemberFirstName.$error
                    : null
                "
              ></b-form-input>
              <b-form-input
                class="rounded shadow-sm mb-1 border border-warning"
                v-model="form.teamMemberLastName"
                placeholder="Eftenamn"
                @input="$v.form.teamMemberLastName.$touch"
                :state="
                  $v.form.teamMemberLastName.$dirty
                    ? !$v.form.teamMemberLastName.$error
                    : null
                "
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              label="Reservspelares förnamn och efternamn:"
              description="Anmälan av reserv är frivilligt."
            >
              <b-form-input
                class="rounded shadow-sm mb-1 border border-warning"
                v-model="form.teamReserveFirstName"
                placeholder="Förnamn"
              ></b-form-input>
              <b-form-input
                class="rounded shadow-sm mb-1 border border-warning"
                v-model="form.teamReserveLastName"
                placeholder="Efternam"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-5" label="Lagets klass:">
              <b-form-radio
                v-for="(teamClass, index) in teamClasses"
                :key="teamClass.index"
                variant="primary"
                :value="teamClass"
                v-model="form.teamClass"
                name="radio2"
                @blur="$v.teamClass.$each[index].value.$touch()"
                :state="$v.form.teamClass.required ? true : null"
                >{{ teamClass }}
              </b-form-radio>
            </b-form-group>
            <b-button
              class="mb-1"
              variant="primary"
              type="submit"
              :disabled="$v.$invalid"
              @click="onSubmit"
              >Skicka din anmälan!</b-button
            >

            <p hidden>{{ $v.form }}</p>

            <hr />
            <b-img
              src="https://res.cloudinary.com/dk1b2ytfl/image/upload/c_thumb,w_200,g_face/v1593371887/putt_favcu8.png"
              fluid
              alt="Sponsor image2"
            ></b-img>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import { required, alpha, minLength } from "vuelidate/lib/validators";
import AppNewsfeed from "../components/Newsfeed";
import AppJumbo from "../components/Jumbo";

export default {
  created() {
    //OBS! FAKE DATAN I STOREN SKRivEr ÖVER EV. TEST-BOKNINGAR NÄR fetchUser körs.
    this.fetchVacancies();
  },
  components: {
    AppNewsfeed,
    AppJumbo
  },
  data() {
    return {
      headlineJumbo: "Tävling",
      vacancies: null,
      leagues: [
        "Helsingborg Padel League",
        "Ladies Padel League",
        "Mixed Padel League",
        "Sommare - HPL"
      ],
      teamClasses: [
        "A - elit",
        "B - tävling",
        "C - glad amatör",
        "D - nybörjare"
      ],
      form: {
        teamName: null,
        league: [],
        teamMemberFirstName: null,
        teamMemberLastName: null,
        teamReserveFirstName: null,
        teamReserveLastName: null,
        teamClass: []
      }
    };
  },

  methods: {
    onSubmit() {
      console.log("submit");
    },
    fetchVacancies() {
      axios
        .post("http://localhost:3002/users")
        .then(response => {
          console.log(response);
          this.vacancies = [
            {
              name: "Helsingborg Padel League",
              vacancies: "2"
            },
            {
              name: "Ladies Padel League",
              vacancies: "1"
            },
            {
              name: "Mixed Padel League",
              vacancies: "2"
            },
            {
              name: "Sommare - HPL",
              vacancies: "1"
            }
          ];
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  validations: {
    form: {
      teamName: {
        required
      },
      league: {
        required
      },
      teamMemberFirstName: {
        required,
        alpha,
        minLength: minLength(2)
      },
      teamMemberLastName: {
        required,
        alpha,
        minLength: minLength(2)
      },
      teamReserveFirstName: {
        alpha,
        minLength: minLength(2)
      },
      teamReserveLasstName: {
        alpha,
        minLength: minLength(2)
      },
      teamClass: {
        required
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/globalclasses.css";
</style>
