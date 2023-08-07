<template>
  <div class="categorySection">
    <div class="categorySection__color" :class="techYellow"></div>
    <div class="categorySection__content">
      <div class="categorySection__info">
        <Title
          class="categorySection__title"
          :text="titleText"
          color="titleGrey"
        />
        <div class="categorySection__navigation">
          <Icon name="yellowLeftArrow" />
          <Icon name="yellowRightArrow" />
        </div>
      </div>
      <div
        class="categorySection__articles"
        :class="`categorySection__articles_newsCarousel`"
      >
        <SectionArticle
          v-for="(article, index) in articles"
          :key="index"
          :titleText="article.title"
          :type="article.type"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./General/Icon.vue";
import Title from "../components/General/Title.vue";
import SectionArticle from "./SectionArticle.vue";

export default {
  components: {
    Icon,
    Title,
    SectionArticle,
  },
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      titleText: "News Carousel",
      techYellow: "techYellow",
    };
  },
};
</script>
