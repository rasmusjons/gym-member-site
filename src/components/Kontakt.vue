<template>
  <div>
    <div>
      <h2>{{ contactInfo.title }} he</h2>
      <h5>{{ contactInfo.name }}</h5>
      <p>{{ contactInfo.name }}</p>
      <p>
        <b-icon-geo-alt></b-icon-geo-alt>

        {{ contactInfo.adress }}, {{ contactInfo.postcode }}
        {{ contactInfo.postaladress }}
      </p>
      <p>
        <b-icon-phone></b-icon-phone>{{ contactInfo.phonenumber }} ||
        {{ contactInfo.mail }}
      </p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contactInfo"]
};
</script>
