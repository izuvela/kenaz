<template>
  <!-- <router-link :to="{ name: 'Single' }">Single</router-link>
  <router-link :to="{ name: 'Category' }">Category</router-link> -->
  <div class="content">
    <div class="content__wrapper">
      <Banner width="940" height="120" />
    </div>
  </div>
</template>

<script>
import Banner from "../components/General/Banner.vue";

export default {
  components: {
    Banner,
  },
};
</script>

<style lang="scss" scoped></style>
