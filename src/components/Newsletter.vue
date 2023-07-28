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
import Title from "./Title.vue";

export default {
  components: {
    Title,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.newsletter {
  min-width: 302px;
  margin-top: 69px;
  position: relative;
}

.newsletter__title {
  position: absolute;
  left: 4px;
  top: -7px;
  height: 33px;
}

.newsletter__text {
  font-family: $font-primary;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: $color-subtextGrey;
  margin-top: 51px;
  margin-left: 1px;
  margin-bottom: 26px;
}

.newsletter__form {
  padding: 0 1px 2px;
}

.newsletter__email {
  width: 190px;
  height: 50px;
  padding: 0 20px;
  background-color: $color-inputBlack;
  font-family: $font-secondary;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.26px;
  color: $color-white;

  &::placeholder {
    color: $color-inputGrey;
  }
}

.newsletter__button {
  color: $color-footerGrey;
  height: 50px;
  width: 110px;
  background-color: $color-primaryPurple;
  font-family: $font-secondary;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.26px;
  text-align: center;
}
</style>
