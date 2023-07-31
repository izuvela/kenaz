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
import Title from "../General/Title.vue";
import Tag from "./Tag.vue";

export default {
  components: {
    Title,
    Tag,
  },
};
</script>
