<template>
  <component :is="linkComponent" v-bind="linkAttributes" class="logo">
    <component v-if="isSvg" :is="img" :alt="alt" />
    <img v-else :src="img" :alt="alt" />
  </component>
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
    to: {
      type: String,
      default: null,
    },
  },
  computed: {
    linkComponent() {
      return this.to ? "router-link" : "div";
    },
    linkAttributes() {
      return this.to ? { to: this.to } : {};
    },
  },
};
</script>
