<template>
  <div class="twitterFeed">
    <Title text="Twitter Feed" color="white" />
    <div class="twitterFeed__tweets">
      <Tweet
        v-for="tweet in tweets"
        :key="tweet.text"
        :text="tweet.text"
        :name="tweet.name"
        :tag="tweet.tag"
      />
    </div>
  </div>
</template>

<script>
import Title from "../General/Title.vue";
import Tweet from "./Tweet.vue";

export default {
  components: {
    Title,
    Tweet,
  },
  data() {
    return {
      tweets: [
        {
          name: "Envato",
          tag: "envato",
          text: "Is this your typical million dollar day in the park? http://enva.to/150vxFC  Happy @TrueThemes Day! #ThemeForest pic.twitter.com/EHz7awxOXy",
        },
        {
          name: "Envato",
          tag: "envato",
          text: "Happy TrueThemes Day http://enva.to/1dRzgLD ",
        },
        {
          name: "Envato",
          tag: "envato",
          text: "@robscri I would really want to look into what's taking so long. Thank you ever so much! ^TC",
        },
      ],
    };
  },
};
</script>
