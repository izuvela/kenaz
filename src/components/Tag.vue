<template>
  <div class="tag" @click="active = !active" :class="{ tag_active: active }">
    <div class="tag__text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.tag {
  background-color: $color-inputBlack;
  padding: 3px 10px 2px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: lighten($color-inputBlack, 10%);
  }
}

.tag__text {
  font-family: $font-subtext;
  color: $color-subtextGrey;
  font-size: 12px;
  line-height: 20px;
}

.tag_active {
  background-color: $color-primaryPurple;

  .tag__text {
    color: $color-footerGrey;
  }

  &:hover {
    background-color: lighten($color-primaryPurple, 10%);
  }
}
</style>
