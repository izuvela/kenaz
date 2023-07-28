<template>
  <div class="tags-widget">
    <Title text="Tags Widget" color="footerGrey" class="tags-widget__title" />
    <div class="tags-widget__tags">
      <Tag text="assueverit" />
      <Tag text="utroquoe" />
      <Tag text="probo" />
      <Tag text="assuev" />
      <Tag text="probo" />
      <Tag text="assuevverit" />
      <Tag text="titl" />
      <Tag text="assuevverit" />
      <Tag text="assuevverit" />
      <Tag text="utroquoe" />
      <Tag text="probo" />
      <Tag text="assuevverit" />
      <Tag text="utroquoe" />
    </div>
  </div>
</template>

<script>
import Title from "./Title.vue";
import Tag from "./Tag.vue";

export default {
  components: {
    Title,
    Tag,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";
.tags-widget {
  position: relative;
  padding: 0 1px 2px 2px;
  margin-top: 69px;
  margin-left: 17px;
  min-width: 303px;
  height: 174px;
}

.tags-widget__title {
  position: absolute;
  top: -8px;
  left: 3px;
}

.tags-widget__tags {
  margin-top: 57px;
  @include flex-display($gap: 5px);
  flex-wrap: wrap;
  width: 303px;
}
</style>
