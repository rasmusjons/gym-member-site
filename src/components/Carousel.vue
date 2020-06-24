<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption=""
        text=""
        img-src="http://www.padelcrew.se/wp-content/uploads/2014/10/padel-bg3-300x164.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption=""
        text=""
        img-src="http://www.padelcrew.se/wp-content/uploads/2014/10/padel-bg3-300x164.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption=""
        text=""
        img-src="http://www.padelcrew.se/wp-content/uploads/2014/10/padel-bg3-300x164.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      console.log(slide);
      this.sliding = true;
    },
    onSlideEnd(slide) {
      console.log(slide);

      this.sliding = false;
    }
  }
};
</script>
