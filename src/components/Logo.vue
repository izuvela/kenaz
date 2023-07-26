<template>
  <div class="logo">
    <component class="logo__image" :is="img" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: Object,
      required: true,
    },
    alt: {
      type: String,
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
}

.logo_image {
  opacity: 1;
}
</style>
