<template>
  <router-link
    :to="to"
    class="link"
    :class="{ link_sideSection: sideSection }"
    >{{ text }}</router-link
  >
</template>

<script>
export default {
  props: {
    to: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
    sideSection: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
