<template>
  <div>
    <!-- Slicar news med "numberOfNews". Om inget värde skickas in så kommer alla nyhter med. -->
    <!-- Används just nu bara på startsida för begränsa antalet nyheter. -->
    <b-card
      v-for="(singleNews, index) in news.slice(0, numberOfNews)"
      :key="index"
      :title="singleNews.headline"
      :img-src="singleNews.imgurl"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        {{ singleNews.content }}
      </b-card-text>

      <b-button
        v-if="singleNews.callToAction"
        :href="singleNews.callToActionLink"
        target="_blank"
        variant="primary"
        >{{ singleNews.callToAction }}</b-button
      >
      <br />
      <b-button
        class="mt-3"
        v-if="isAdmin.admin"
        target="_blank"
        variant="danger"
        @click="onRemove(singleNews)"
        >Ta bort</b-button
      >
    </b-card>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetchNews");
  },
  props: ["numberOfNews", "newsContent"],
  data() {
    return {};
  },
  computed: {
    news() {
      let array = [];
      if (this.$store.getters.news === null) {
        return array;
      } else {
        array.push(this.$store.getters.news);
        return array.flat();
      }
    },
    isAdmin() {
      return !this.$store.getters.user ? false : this.$store.getters.user;
    }
  },
  methods: {
    onRemove(news) {
      this.$store.dispatch("removeNews", news.id);
    }
  }
};
</script>
