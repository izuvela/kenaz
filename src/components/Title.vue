<template>
  <div class="title" :style="{ color: colorMap[color] }">{{ text }}</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
  },
  computed: {
    colorMap() {
      return {
        footerGrey: "#CCCCCC",
        titleGrey: "#363F48",
        white: "#FFFFFF"
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";
.title {
  font-family: $font-primary;
  font-size: 24px;
  line-height: 28.8px;
  font-weight: 700;
}
</style>
