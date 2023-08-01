<template>
  <div class="banner" :style="{ width: `${width}px`, height: `${height}px` }">
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
  },
};
</script>
