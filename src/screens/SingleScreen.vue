<template>
  <SingleArticleImage
    titleText="'Margot' breathlessly reimagines Anne Frank's sister"
    date="August 26, 2013"
  />
  <div class="content__group">
    <div class="content__left">
      <SingleArticleContent
        :firstParagraph="firstParagraph"
        :secondParagraph="secondParagraph"
      />
      <AboutTheAuthor />
      <Comments />
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
import SingleArticleImage from "../components/SingleArticle/SingleArticleImage.vue";
import SingleArticleContent from "../components/SingleArticle/SingleArticleContent.vue";
import AboutTheAuthor from "../components/SingleArticle/AboutTheAuthor.vue";
import Comments from "../components/SingleArticle/Comments.vue";
import { useArticleStore } from "../stores/articleStore";

export default {
  components: {
    Banner,
    Slider,
    Sidebar,
    SideBanner,
    ArticleList,
    SingleArticleImage,
    SingleArticleContent,
    AboutTheAuthor,
    Comments,
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
  setup() {
    const articleStore = useArticleStore();

    const firstParagraph = articleStore.article.firstParagraph;
    const secondParagraph = articleStore.article.secondParagraph;

    return {
      firstParagraph,
      secondParagraph,
    };
  },
};
</script>
