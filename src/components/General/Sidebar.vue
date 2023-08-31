<template>
  <div class="sidebar">
    <div class="sidebar__links">
      <LinkSideSection
        v-for="link in links"
        :key="link.text"
        :text="link.text"
        @link-clicked="activeLink = link.text"
        :class="{ link_sideSectionActive: activeLink === link.text }"
      />
    </div>
    <div class="sidebar__articles">
      <Post v-for="index in getActiveArticles" :key="index" :isSidebar="true" />
    </div>
  </div>
</template>

<script>
import Post from "../Footer/Post.vue";
import Link from "./Link.vue";
import LinkSideSection from "./LinkSideSection.vue";
import SidebarArticle from "./SidebarArticle.vue";

export default {
  components: { Link, SidebarArticle, LinkSideSection, Post },
  data() {
    return {
      activeLink: "Popular",
      popularArticles: 5,
      topRatedArticles: 4,
      commentArticles: 3,
    };
  },
  computed: {
    getActiveArticles() {
      switch (this.activeLink) {
        case "Popular":
          return this.popularArticles;
        case "Top Rated":
          return this.topRatedArticles;
        case "Comments":
          return this.commentArticles;
        default:
          return 0;
      }
    },
  },
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>
