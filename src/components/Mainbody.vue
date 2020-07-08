<template>
  <div>
    <b-container>
      <div class="background">
        <b-row class="m-1 p-1">
          <b-col md="6" sm="12">
            <h2 class="mt-4">Skapa användare för boka träning</h2>
            <p>
              På denna sida måste du skapa en användare för att boka ett
              träningspass. På boka kan du söka på träningspass efter datum
              eller välja att söka flexibelt med den egenutvecklare flexibla
              sökningen. På "Min sida" kan du se dina träningspass, avboka, se
              din träningsstatistik samt uppdatera din profil-info och bild.
            </p>
            <p>
              Som admin kan du lägga upp nyheter (admin@admin.com och lösenord
              admin123). Med det egenbyggda publiceringsverktyget kan du välja
              bilder från en enklare bildbank och skapa nyheter som publiceras
              på alla användares "Min sida".
            </p>

            <b-button
              class="mt-2"
              variant="primary"
              @click="handleRouting('/boka')"
              >Gå till bokning <b-icon-calendar3 class="p-1"></b-icon-calendar3
            ></b-button>
            <app-carousel class="mt-4" :images="images0"></app-carousel>
          </b-col>
          <b-col md="6" sm="12">
            <app-carousel
              class="mt-4 d-none d-sm-block"
              :images="images1"
            ></app-carousel>

            <h2 class="mt-4">Teknisk info</h2>
            <p>
              Appen är byggd i Vue med en Firebase backend. Cloduinary används
              för hantera bilder och Vuevalidation för form-validering. Chartjs
              används för skapa stapeldiagrammet på "Min sida". Sidan har
              medvetet totalt ca 100 rader css och scss, utan lutar sig istället
              starkt mot Bootstrap.
            </p>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import AppCarousel from "./Carousel";

export default {
  components: {
    AppCarousel
  },
  data() {
    return {
      images0: [
        "https://res.cloudinary.com/dk1b2ytfl/image/upload/v1594110042/jonathan-borba-kCVZIbOKztI-unsplash_gayjsn.jpg",
        "https://res.cloudinary.com/dk1b2ytfl/image/upload/v1594110041/jonathan-borba-H6wTktsFxik-unsplash_q6w2ot.jpg",
        "https://res.cloudinary.com/dk1b2ytfl/image/upload/v1594110039/anastase-maragos-HyvE5SiKMUs-unsplash_cnto0d.jpg"
      ],
      images1: [
        "https://res.cloudinary.com/dk1b2ytfl/image/upload/v1594033611/meghan-holmes-wy_L8W0zcpI-unsplash_mqnwrl.jpg",
        "https://res.cloudinary.com/dk1b2ytfl/image/upload/v1594040427/victor-freitas-qZ-U9z4TQ6A-unsplash_fgldnw.jpg",
        "https://res.cloudinary.com/dk1b2ytfl/image/upload/v1594040426/ryan-de-hamer-WIPIAJW2-P8-unsplash_xcvwyi.jpg"
      ]
    };
  },
  methods: {
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

<style scoped>
.background {
  min-height: 600px;
  background-color: #eeeeee7a;
}

.videoContainer {
  position: relative;
}
.video {
  min-width: 100%;
  max-height: 10%;
}
.videoOverlay {
  background: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.videoOverlay h1 {
  color: white;
  font-size: 9vw;
  text-align: center;
}
</style>
