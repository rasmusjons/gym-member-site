<template>
  <div>
    <b-container>
      <div class="background">
        <b-row class="m-1 p-1">
          <b-col md="6" sm="12">
            <h2>Välkommen</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ut
              aliquam atque tempore labore saepe dignissimos perferendis facilis
              quod. Tempora dolore tempore accusantium quaerat libero sit nam
              cupiditate repudiandae dignissimos?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ut
              aliquam atque tempore labore saepe dignissimos perferendis facilis
              quod. Tempora dolore tempore accusantium quaerat libero sit nam
              cupiditate repudiandae dignissimos?
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

            <h2 class="mt-4">Skapa användare för boka träning</h2>
            <p>
              På denna sida måste du skapa en användare för att boka ett
              träningspass. Du kan även ta del av den träning och uppdatera din
              profil på "Min sida"
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ut
              aliquam atque tempore labore saepe dignissimos perferendis facilis
              quod. Tempora dolore tempore accusantium quaerat libero sit nam
              cupiditate repudiandae dignissimos?
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
