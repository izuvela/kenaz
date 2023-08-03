<template>
  <div
    class="banner"
    :style="{ width: `${width}px`, height: `${height}px` }"
    :class="{ banner_sidebar: sidebar }"
  >
    <div class="banner__inner">
      <div class="banner__title">banner</div>
      <div class="banner__size">{{ width }}x{{ height }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    sidebar: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
