<template>
  <div class="newsletter">
    <Title text="Newsletter" color="footerGrey" class="newsletter__title" />
    <p class="newsletter__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo
      ante...
    </p>
    <div class="newsletter__form">
      <input type="email" class="newsletter__email" placeholder="Your mail" />
      <button class="newsletter__button" type="submit">Subscribe</button>
    </div>
  </div>
</template>

<script>
import Title from "../General/Title.vue";

export default {
  components: {
    Title,
  },
};
</script>
