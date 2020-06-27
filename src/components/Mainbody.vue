<template>
  <div>
    <b-container>
      <div class="background">
        <b-row class="m-1 p-1">
          <b-col md="6" sm="12">
            <h2>Juicy headline!</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam et
              aperiam autem minima. Voluptate voluptatum enim velit, itaque
              perspiciatis, dolores, illum quasi harum vel cum iusto! Atque
              earum nisi rerum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aliquam deleniti aliquid fuga id minus enim?
              Quidem cupiditate quisquam libero recusandae quis veritatis veniam
              ab tempora asperiores, ea, sapiente, eius quos.
            </p>
            <app-carousel></app-carousel>
          </b-col>

          <b-col md="6" sm="12">
            <h2 class="invisible">BLANK</h2>
            <app-carousel></app-carousel>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam et
              aperiam autem minima. Voluptate voluptatum enim velit, itaque
              perspiciatis, dolores, illum quasi harum vel cum iusto! Atque
              earum nisi rerum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cupiditate maiores odit officiis aliquam.
              Eveniet in molestias officia blanditiis molestiae harum quo
              praesentium, rem consequatur possimus soluta ratione repudiandae
              illo veritatis.
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
  }
};
</script>

<style scoped>
.background {
  min-height: 600px;
  background-color: #eeeeee7a;
}
</style>
