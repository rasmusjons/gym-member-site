<template>
  <div>
    <b-container>
      <b-row class="m-1 mt-4 p-1">
        <b-col cols="12">
          <b-img
            src="http://www.padelcrew.se/wp-content/uploads/2014/10/arenor-bg-1024x363.jpg"
            fluid
            alt="Sponsor image"
          ></b-img>
        </b-col>
      </b-row>
      <b-row class="m-1 p-1">
        <b-col class="mt-1" md="8">
          <b-row class="mt-1 pt-1s">
            <b-col md="12" sm="12">
              <h1>Aktuella ligor</h1>

              <b-button block class="mt-4 p-4" variant="primary"
                >Helsingborg Padel League
                <span> - Öppnas i nytt fönster</span></b-button
              >
              <b-button block class="mt-4 p-4" variant="primary"
                >Helsingborg Ladies League
                <span> - Öppnas i nytt fönster</span></b-button
              >

              <div>
                <b-button v-b-toggle.sidebar-1 class="mt-4 p-2" variant="info"
                  >Nyheter!</b-button
                >
                <b-sidebar id="sidebar-1" title="Nyheter" shadow>
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
              <h1>Info och spelregler</h1>
              <p>
                COPY PASTE FRÅN PADELCREW.SE Info och spelregler: 6-lag i varje
                pool. Innebär 5 matcher per omgång. 2 lag går upp 2 lag åker ur
                och 2 stannar kvar. Matcherna spelas i bäst av tre set. Vid 1-1
                i set avgörs matchen i super tiebreak, om man bedömer att man
                inte hinner spela ett vanligt tredje set. Matchen får aldrig ta
                mer än 90 min. Pris: Kostnaden för en omgång är 1 400kr/lag och
                man kan bara säga upp sin plats i sista omgången innan sommaren
                och innan jul. Vinnaren i varje serie vinner ett presentkort
                (kan hämtas ut senast sex veckor efter avslutad omgång).
                Tävlingsregler: Besök vår sida för tävlingsregler för aktuella
                regler. Aktuellt spelscheman: Besök Helsingborg Padel League och
                Ladies Padel League för aktuella spelscheman.
              </p>
              <hr
            /></b-col>
          </b-row>
          <b-row class="mt-1 pt-1">
            <b-col sm="3" md="12">
              <h1>Lediga platser</h1>
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
          <b-row class="mt-1 pt-1">
            <b-col md="12" sm="12">
              <div>
                <b-embed
                  type="iframe"
                  allowfullscreen
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/zvIIVGV0Ci4"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></b-embed>
              </div>
            </b-col>
          </b-row>
        </b-col>

        <b-col class="mt-1" md="4" sm="12">
          <h1>Anmäl ditt lag!</h1>
          <b-form-group id="input-group-1" label="Lagnamn:">
            <b-form-input
              autofocus
              class="rounded shadow-sm mb-1 border border-warning"
              v-model="form.teamName"
              placeholder="Lagnamn"
              @input="$v.form.teamName.$touch"
              :state="$v.form.teamName.$dirty ? !$v.form.teamName.$error : null"
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
              autofocus
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
              autofocus
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
              autofocus
              class="rounded shadow-sm mb-1 border border-warning"
              v-model="form.teamReserveFirstName"
              placeholder="Förnamn"
            ></b-form-input>
            <b-form-input
              autofocus
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
            src="http://www.padelcrew.se/wp-content/uploads/2014/10/arena-landskrona-300x150.jpg"
            fluid
            alt="Sponsor image2"
          ></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import { required, alpha, minLength } from "vuelidate/lib/validators";
import AppNewsfeed from "../components/Newsfeed";

export default {
  created() {
    //OBS! FAKE DATAN I STOREN SKRivEr ÖVER EV. TEST-BOKNINGAR NÄR fetchUser körs.
    this.fetchVacancies();
  },
  components: {
    AppNewsfeed
  },
  data() {
    return {
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
      console.log("fetchVacancies -> fetchVacancies", this.fetchVacancies);

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
          console.log(this.vacancies);
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
