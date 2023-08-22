<template>
  <div class="content__group">
    <div class="content__left">
      <ArticleList />
      <Banner width="620" height="120" />
    </div>
    <div class="content__right">
      <Sidebar :links="sideLinks" />
      <SideBanner />
    </div>
  </div>
</template>

<script>
import Banner from "../components/General/Banner.vue";
import SideBanner from "../components/General/SideBanner.vue";
import Sidebar from "../components/General/Sidebar.vue";
import Slider from "../components/Sliders/Slider.vue";
import ArticleList from "../components/Articles/ArticleList.vue";

export default {
  components: {
    Banner,
    Slider,
    Sidebar,
    SideBanner,
    ArticleList,
  },

  data() {
    return {
      sideLinks: [
        { text: "Popular" },
        { text: "Top Rated" },
        { text: "Comments" },
      ],
    };
  },
};
</script>
