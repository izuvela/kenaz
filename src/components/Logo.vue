<template>
  <div class="logo">
    <component v-if="isSvg" :is="img" :alt="alt" />
    <img v-else :src="img" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: [Object, String],
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    isSvg: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.logo {
  @include flex-display($justify-content: center, $align-items: center);
  width: 60px;
  height: 50px;
  background-color: $color-transparentWhite;
  cursor: pointer;
}

</style>
