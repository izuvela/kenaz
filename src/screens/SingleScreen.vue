<template>
  <div class="content">
    <div class="content__wrapper">
      <Banner width="940" height="120" />
      <SingleArticleImage
        titleText="'Margot' breathlessly reimagines Anne Frank's sister"
        date="August 26, 2013"
      />
      <div class="content__group">
        <div class="content__left">
          <Banner width="620" height="120" />
        </div>
        <div class="content__right">
          <Sidebar :links="sideLinks" />
          <SideBanner />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/General/Banner.vue";
import SideBanner from "../components/General/SideBanner.vue";
import Sidebar from "../components/General/Sidebar.vue";
import Slider from "../components/Sliders/Slider.vue";
import ArticleList from "../components/Articles/ArticleList.vue";
import SingleArticleImage from "../components/SingleArticle/SingleArticleImage.vue";
import ArticleImage from "../assets/article-image.png";

export default {
  components: {
    Banner,
    Slider,
    Sidebar,
    SideBanner,
    ArticleList,
    SingleArticleImage,
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
