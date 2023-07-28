<template>
  <div class="footer__strip"></div>
  <div class="footer__main">
    <div class="footer__wrapper">
      <Socials />
      <Newsletter />
      <TagsWidget />
    </div>
  </div>
</template>

<script>
import Socials from "./Socials.vue";
import Title from "./Title.vue";
import Newsletter from "./Newsletter.vue";
import TagsWidget from "./TagsWidget.vue";

export default {
  components: {
    Socials,
    Title,
    Newsletter,
    TagsWidget
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
  @include flex-display();
  width: $max-width;
}
</style>
