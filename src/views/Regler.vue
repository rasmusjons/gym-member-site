<template>
  <div>
    <app-jumbo :headline="headlineJumbo"></app-jumbo>
    <b-container>
      <div class="background">
        <b-row class="m-1 p-1">
          <b-col sm="12" md="12">
            <h2>Regler för Padel</h2>
            <ul class="listA">
              <li>På en vanlig plan spelar man alltid dubbel.</li>
              <li>Poängräkning är samma som tennis, 15, 30, 40.</li>
              <li>Linjerna på planen används endast vid serve.</li>
              <li>
                Serve ska slås underhands och studsa i motspelarnas serveruta.
              </li>
              <li>
                Serve får studsa upp i glasväggen men om den studsar i galler är
                den felaktig.
              </li>
              <li>Man har två servar på sig.</li>
              <li>
                Om bollen går direkt i motspelarnas vägg så räknas den som ute.
                Innan bollen tar i motspelarens vägg så måste den studsa i
                marken.
              </li>
              <li>
                Man får spela volley (inte på serve), halvvolley eller låta
                bollen studsa på glas/gallervägg.
              </li>
              <li>
                Man får även slå bollen på sin egen glasvägg för att få över den
                till motspelarnas planhalva.
              </li>
              <li>Man får inte slå bollen i gallret på sin egen sida.</li>
              <li>
                I padel vinner man poäng om:
                <ul class="listB">
                  <li>
                    Bollen studsar i marken två gånger på motståndarens sida
                  </li>
                  <li>Motståndaren slår bollen i nät.</li>
                  <li>
                    Motståndaren slår bollen ut, dvs antingen direkt ut ur
                    “buren” eller direkt på en av dina väggar.
                  </li>
                  <li>
                    Notera att det däremot är giltigt att smasha bollen i marken
                    och den då studsar ut ur buren. Om bollen smashas utanför är
                    det ok för motståndaren att springa utanför planen och ta
                    bollen innan den studsat.
                  </li>
                  <li>Motståndaren slår bollen i sitt eget galler.</li>
                  <li>En motståndare träffas av bollen.</li>
                </ul>
              </li>
            </ul>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import AppJumbo from "../components/Jumbo";
export default {
  components: {
    AppJumbo
  },
  data() {
    return {
      headlineJumbo: "Rules"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/globalclasses.css";
</style>
