<template>
  <div class="socials">
    <div class="socials__header">
      <Icon name="blue-logo" class="socials__logo" />
      <div class="socials__title">Kenaz</div>
    </div>
    <p class="socials__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante.
    </p>
    <div class="socials__links">
      <Icon name="Rss" class="socials__icons socials__icons--rss" />
      <Icon name="Facebook" class="socials__icons socials__icons--facebook" />
      <Icon
        name="twitter-primary"
        class="socials__icons socials__icons--twitter"
      />
      <Icon name="dribble" class="socials__icons socials__icons--dribble" />
      <Icon name="Linkedin" class="socials__icons socials__icons--linkedin" />
      <Icon name="Youtube" class="socials__icons socials__icons--youtube" />
      <Icon name="Skype" class="socials__icons socials__icons--skype" />
    </div>
  </div>
</template>

<script>
import Icon from "../General/Icon.vue";

export default {
  components: {
    Icon,
  },
};
</script>
