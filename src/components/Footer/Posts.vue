<template>
  <div class="posts">
    <Title color="white" :text="titleText" />
  </div>
</template>

<script>
import Title from "../General/Title.vue";

export default {
  components: { Title },
  props: {
    titleText: {
      required: true,
      type: String,
    },
  },
};
</script>
