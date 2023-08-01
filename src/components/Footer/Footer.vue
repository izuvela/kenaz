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
        <Posts titleText="Featured" />
        <Posts titleText="Random Posts" />
        <TwitterFeed />
      </div>
    </div>
    <div class="footer__info">
      <Divider />
      <div class="footer__bottom">
        <div class="footer__copyright">
          © 2013 - Kenaz Template - Proudly made at Plava tvornica Croatia
        </div>
        <div class="footer__links">
          Typography - Templates - Contact Form - 404 Page
        </div>
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
import TwitterFeed from "./TwitterFeed.vue";
import Divider from "./Divider.vue";

export default {
  components: {
    Socials,
    Title,
    Newsletter,
    TagsWidget,
    Posts,
    TwitterFeed,
    Divider,
  },
};
</script>
