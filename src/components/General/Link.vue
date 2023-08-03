<template>
  <router-link :to="to" class="link">{{ text }}</router-link>
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
  },
};
</script>
