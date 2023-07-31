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
