<template>
  <div>
    <app-jumbo :headline="headlineJumbo"></app-jumbo>
    <b-container>
      <div class="background">
        <b-row class="m-1 mt-4 p-1">
          <b-col cols="12"
            ><b-alert v-if="published" variant="success" show
              >Nyhet publicerad</b-alert
            ></b-col
          >
          <b-col cols="6">
            <b-row>
              <b-col cols="12">
                <label for="headline">Rubrik:</label>

                <b-form-textarea
                  id="headline"
                  v-model="newsContent.headline"
                  size="sm"
                  placeholder="Rubrik"
                  rows="1"
                  max-rows="1"
                ></b-form-textarea>
                <label for="content">Din text:</label>

                <b-form-textarea
                  id="content"
                  v-model="newsContent.content"
                  size="sm"
                  placeholder="Din text"
                  rows="4"
                  max-rows="8"
                ></b-form-textarea>

                <b-button
                  v-if="!callToAction"
                  class="mt-2 mb-2"
                  block
                  variant="primary"
                  @click="callToAction = !callToAction"
                  >Lägg till knapp?</b-button
                >
                <b-button
                  v-if="callToAction"
                  class="mt-2 mb-2"
                  block
                  variant="primary"
                  @click="callToAction = !callToAction"
                  >Ta bort knapp</b-button
                >
                <hr />
                <label for="Link" v-if="callToAction">Knapp</label>
                <b-form-textarea
                  v-if="callToAction"
                  id="Link"
                  v-model="newsContent.callToAction"
                  size="sm"
                  placeholder="Knapptext"
                  rows="1"
                  max-rows="1"
                ></b-form-textarea>
                <label for="Link" v-if="callToAction">Knappens länk</label>
                <b-form-textarea
                  v-if="callToAction"
                  id="Link"
                  v-model="newsContent.callToActionLink"
                  size="sm"
                  placeholder="Länk till sida"
                  rows="1"
                  max-rows="1"
                ></b-form-textarea>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="6">
            <b-row>
              <b-col cols="12">
                <b-card
                  :title="newsContent.headline"
                  :img-src="newsContent.imgurl"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                >
                  <b-card-text>
                    {{ newsContent.content }}
                  </b-card-text>

                  <b-button
                    :href="newsContent.callToActionLink"
                    target="_blank"
                    variant="primary"
                    v-if="callToAction"
                    >{{ newsContent.callToAction }}</b-button
                  >
                </b-card>
                <b-button
                  style="max-width: 20rem;"
                  variant="primary"
                  block
                  @click="onPublish"
                  >Tryck här för publicera!</b-button
                >
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="m-1 mt-4 p-1">
          <b-row>
            <b-col cols="12">
              <h5>Välj en schysst bild</h5>
            </b-col>
          </b-row>
          <b-row>
            <b-col
              cols="3"
              v-for="(image, index) in imageGallery"
              :key="image.index"
            >
              <b-img
                class="pointer"
                :src="image"
                fluid
                alt="Man doing pull ups"
                @click="changeImage(image, index)"
              ></b-img>
            </b-col>
          </b-row>
        </b-row>
        <b-row>
          <b-col class="mt-4" sm="12" md="12">
            <hr />
            <h5>Publicerade Nyheter</h5>
            <div class="mt-4">
              <AppNewsfeed></AppNewsfeed>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import AppJumbo from "../components/Jumbo";
import axios from "axios";
import AppNewsfeed from "../components/Newsfeed";

export default {
  data: function() {
    return {
      published: false,
      imageGallery: {
        one:
          "https://res.cloudinary.com/dk1b2ytfl/image/upload/v1594033608/victor-freitas-WvDYdXDzkhs-unsplash_uwvwby.jpg",
        two:
          "https://res.cloudinary.com/dk1b2ytfl/image/upload/v1594033610/content-pixie-be-6rpnQ30k-unsplash_pycjik.jpg",
        three:
          "https://res.cloudinary.com/dk1b2ytfl/image/upload/v1594033611/meghan-holmes-wy_L8W0zcpI-unsplash_mqnwrl.jpg",
        four:
          "https://res.cloudinary.com/dk1b2ytfl/image/upload/v1594034342/jonathan-borba-zfPOelmDc-M-unsplash_ybwlkl.jpg"
      },
      callToAction: false,
      headlineJumbo: "Admin",
      newsContent: {
        headline: null,
        content: null,
        imgurl:
          "https://res.cloudinary.com/dk1b2ytfl/image/upload/v1594032064/kelly-sikkema-IZOAOjvwhaM-unsplash_ik9pq7.jpg",
        callToAction: null,
        callToActionLink: null
      }
    };
  },
  components: {
    AppJumbo,
    AppNewsfeed
  },

  methods: {
    changeImage(src, index) {
      this.imageGallery[index] = this.newsContent.imgurl;
      this.newsContent.imgurl = src;
    },
    onPublish() {
      const data = {
        headline: this.newsContent.headline,
        content: this.newsContent.content,
        imgurl: this.newsContent.imgurl,
        callToAction: this.newsContent.callToAction,
        callToActionLink: this.newsContent.callToActionLink
      };

      const url = "https://membersite-21e51.firebaseio.com/news.json";
      const userID = localStorage.getItem("token");

      axios
        .post(url + "?auth=" + userID, data)
        .then(() => {
          this.published = true;
          this.$store.dispatch("fetchNews");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/globalclasses.css";
</style>
