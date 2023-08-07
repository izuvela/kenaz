<template>
  <CategorySection
    titleText="News Carousel"
    color="techYellow"
    type="newsCarousel"
  >
    <template v-slot:link>
      <div class="categorySection__navigation">
        <Icon name="yellowLeftArrow" />
        <Icon name="yellowRightArrow" />
      </div>
    </template>
    <div
      v-for="(article, index) in articles"
      :key="index"
      class="categorySection__articles categorySection__articles_newsCarousel"
    >
      <SectionArticle :titleText="article.title" :type="article.type" />
    </div>
  </CategorySection>
</template>

<script>
import Icon from "./General/Icon.vue";
import CategorySection from "./CategorySection.vue";
import SectionArticle from "./SectionArticle.vue";

export default {
  components: {
    Icon,
    CategorySection,
    SectionArticle,
  },
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
};
</script>
