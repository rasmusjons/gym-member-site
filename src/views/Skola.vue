<template>
  <div>
    <app-jumbo :headline="headlineJumbo"></app-jumbo>

    <b-container>
      <div class="background">
        <b-row class="m-1 p-1">
          <b-col md="6" sm="12">
            <h2>
              Varför har Padel blivit så populärt och hur kan den användas i
              skolan?
            </h2>
            <p>
              Inte bara vuxna har kul när de spelar Padel, även barn & ungdomar
              tycker det är riktigt roligt – oavsett ålder. Enkelheten gör denna
              sport extremt attraktiv för alla.
            </p>
            <p>Padel hjälper barnen att utveckla:</p>
            <ul class="listA">
              <li>Psykomotoriska färdigheter</li>
              <li>Öga-hand koordination</li>
              <li>Reflexer</li>
              <li>Flexibilitet</li>
              <li>Muskler</li>
              <li>Uthållighet</li>
              <li>Rörlighet</li>
            </ul>
            <p>
              Ur det psykologiska perspektivet drar man särskilt stor nytta av
              Padel genom just dess enkelhet. Snabb utveckling leder till stärkt
              självkänsla och ökat självförtroende.
            </p>

            <p>
              Även det sociala samspelet utvecklas genom att man är fyra spelare
              på liten yta.
            </p>
            <p>
              Kamratskap, Disciplin och Ansvarstagande främjas med då man dömer
              själva.
            </p>
            <app-carousel></app-carousel>
          </b-col>

          <b-col md="6" sm="12">
            <h2 class="invisible">BLANK</h2>
            <app-carousel></app-carousel>
            <h2>Klart vi ska ha padel i skolan! Hur gör vi?</h2>
            <p>
              Vid vanliga lektionstillfälle tar vi 50kr per elev per timme,
              dagtid. I det ingår lämpligt antal banor, rack och bollar.
            </p>
            <p>
              Är ni intresserade av att lägga en hel friluftsdag hos oss så
              hittar vi en förmånlig lösning för er skola.
            </p>
            <p>
              Se våra anläggningar
              <a class="link" href="http://www.padelcrew.se/arenor"> här!</a>
            </p>
            <p>
              För mer information, bokning eller övriga frågor kontakta oss på

              <a class="link" href="mailto:info@padelcrew.se">
                info@padelcrew.se!</a
              >
            </p>
            <p>Välkomna!</p>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import AppCarousel from "../components/Carousel";
import AppJumbo from "../components/Jumbo";

export default {
  components: {
    AppCarousel,
    AppJumbo
  },
  data() {
    return {
      headlineJumbo: "Skola"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/globalclasses.css";
</style>
