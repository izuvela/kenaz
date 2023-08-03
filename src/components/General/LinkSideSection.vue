<template>
  <div
    class="link link_sideSection"
    :class="{ link_sideSectionActive: sideSectionActive }"
    @click="$emit('link-clicked')"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String,
    },
    sideSectionActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
