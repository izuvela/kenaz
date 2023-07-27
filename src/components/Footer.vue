<template>
  <div class="footer__strip"></div>
  <div class="footer__main">
    <div class="footer__wrapper">
      <Socials />
    </div>
  </div>
</template>

<script>
import Socials from "./Socials.vue";

export default {
  components: {
    Socials,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";
.footer__strip {
  width: 100%;
  height: 20px;
  background-color: $color-primaryPurple;
}

.footer__main {
  @include flex-display($justify-content: center);
  height: 913px;
  background-color: $color-primaryBlack;
}

.footer__wrapper {
  width: $max-width;
}
</style>
