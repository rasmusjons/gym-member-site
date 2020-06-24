<template>
  <div>
    <b-list-group v-for="price in prices" :key="price.index">
      <b-list-group-item class="text-dark m-1">{{ price }}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  props: ["prices"]
};
</script>
