<template>
  <div>
    <b-card
      v-for="singleNews in news"
      :key="singleNews.index"
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

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          headline: "Headline!",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          imgurl:
            "https://scontent.fmmx1-1.fna.fbcdn.net/v/t1.0-9/104749628_1610242192469040_34100068503082998_n.jpg?_nc_cat=111&_nc_sid=110474&_nc_ohc=mgZlNm9FLbgAX_ifSm2&_nc_ht=scontent.fmmx1-1.fna&oh=d7cd4b3deb3f7dbb43386b1137459d55&oe=5F1BCD0D"
        },
        {
          headline: "Headline2",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          imgurl:
            "https://scontent.fmmx1-1.fna.fbcdn.net/v/t1.0-9/94624840_1561136094046317_8959364485978521600_n.jpg?_nc_cat=107&_nc_sid=110474&_nc_ohc=iGSAyHL1AnkAX8ZWkGI&_nc_ht=scontent.fmmx1-1.fna&oh=5a1b9cd06ccd03b6f68ab0b5674c19fe&oe=5F1C1029"
        },
        {
          headline: "Headline3",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          imgurl:
            "https://scontent.fmmx1-1.fna.fbcdn.net/v/t1.0-9/104749628_1610242192469040_34100068503082998_n.jpg?_nc_cat=111&_nc_sid=110474&_nc_ohc=mgZlNm9FLbgAX_ifSm2&_nc_ht=scontent.fmmx1-1.fna&oh=d7cd4b3deb3f7dbb43386b1137459d55&oe=5F1BCD0D"
        },
        {
          headline: "Headline4",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          imgurl:
            "https://scontent.fmmx1-1.fna.fbcdn.net/v/t1.0-9/94624840_1561136094046317_8959364485978521600_n.jpg?_nc_cat=107&_nc_sid=110474&_nc_ohc=iGSAyHL1AnkAX8ZWkGI&_nc_ht=scontent.fmmx1-1.fna&oh=5a1b9cd06ccd03b6f68ab0b5674c19fe&oe=5F1C1029"
        }
      ]
    };
  }
};
</script>
