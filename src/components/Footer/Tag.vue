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
