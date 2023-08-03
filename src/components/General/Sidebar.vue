<template>
  <div class="sidebar">
    <div class="sidebar__links">
      <LinkSideSection
        text="Popular"
        @link-clicked="activeLink = 'Popular'"
        :class="{ link_sideSectionActive: activeLink === 'Popular' }"
      />
      <LinkSideSection
        text="Top Rated"
        @link-clicked="activeLink = 'Top Rated'"
        :class="{ link_sideSectionActive: activeLink === 'Top Rated' }"
      />
      <LinkSideSection
        text="Comments"
        @link-clicked="activeLink = 'Comments'"
        :class="{ link_sideSectionActive: activeLink === 'Comments' }"
      />
    </div>
    <div class="sidebar__articles">
      <SidebarArticle v-for="index in getActiveArticles" :key="index" />
    </div>
  </div>
</template>

<script>
import Link from "./Link.vue";
import LinkSideSection from "./LinkSideSection.vue";
import SidebarArticle from "./SidebarArticle.vue";

export default {
  components: { Link, SidebarArticle, LinkSideSection },
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
};
</script>
