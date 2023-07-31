<template>
  <div class="footer__strip"></div>
  <div class="footer__main">
    <div class="footer__wrapper">
      <div class="footer__first-row">
        <Socials />
        <Newsletter />
        <TagsWidget />
      </div>
      <div class="footer__second-row">
        <Posts titleText="Featured"/>
      </div>
    </div>
  </div>
</template>

<script>
import Socials from "./Socials.vue";
import Title from "../General/Title.vue";
import Newsletter from "./Newsletter.vue";
import TagsWidget from "./TagsWidget.vue";
import Posts from "./Posts.vue";

export default {
  components: {
    Socials,
    Title,
    Newsletter,
    TagsWidget,
    Posts
  },
};
</script>
