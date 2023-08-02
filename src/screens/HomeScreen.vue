<template>
  <div class="content">
    <div class="content__wrapper">
      <Banner width="940" height="120" />
      <Slider />
      <CategorySection titleText="Sport" color="newsBlue"></CategorySection>
    </div>
  </div>
</template>

<script>
import CategorySection from "../components/CategorySection.vue";
import Banner from "../components/General/Banner.vue";
import Slider from "../components/Slider.vue";

export default {
  components: {
    Banner,
    Slider,
    CategorySection,
  },
};
</script>

<style lang="scss" scoped></style>
