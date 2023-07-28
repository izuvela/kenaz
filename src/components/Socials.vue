<template>
  <div class="socials">
    <Icon name="blue-logo" class="socials__logo" />
    <div class="socials__title">Kenaz</div>
    <p class="socials__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante.
    </p>
    <div class="socials__links">
      <Icon name="Rss" class="socials__icons socials__icons_rss" />
      <Icon name="Facebook" class="socials__icons socials__icons_facebook" />
      <Icon
        name="twitter-primary"
        class="socials__icons socials__icons_twitter"
      />
      <Icon name="dribble" class="socials__icons socials__icons_dribble" />
      <Icon name="Linkedin" class="socials__icons socials__icons_linkedin" />
      <Icon name="Youtube" class="socials__icons socials__icons_youtube" />
      <Icon name="Skype" class="socials__icons socials__icons_skype" />
    </div>
  </div>
</template>

<script>
import Icon from "../components/Icon.vue";

export default {
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.socials {
  position: relative;
  min-width: 302px;
  margin-top: 56px;
  margin-right: 18px;
}

.socials__logo {
  margin-left: 3px;
}

.socials__text {
  font-family: $font-primary;
  font-size: 14px;
  line-height: 20px;
  color: $color-subtextGrey;
  margin-top: 23px;
  margin-left: 1px;
  margin-bottom: 23px;
}

.socials__title {
  position: absolute;
  top: -7.78px;
  left: 49px;
  font-family: $font-primary;
  font-size: 29.62px;
  font-weight: 400;
  line-height: 51.81px;
  color: $color-footerBlue;
}

.socials__icons {
  cursor: pointer;

  &_adjusted {
    margin-bottom: 1px;
  }

  &_rss {
    margin-right: 6px;
  }

  &_facebook {
    margin-right: 5px;
  }

  &_twitter {
    margin-right: 7px;
  }

  &_dribble {
    margin-right: 7px;
  }

  &_linkedin {
    margin-right: 5px;
    margin-bottom: 1px;
  }
  
  &_youtube {
    margin-right: 6px;
    margin-bottom: 1px;
  }

  &_skype {
    margin-bottom: 1px;
  }
}
</style>
