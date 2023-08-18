<template>
  <div class="articleList">
    <Title text="News" color="titleGrey" class="articleList__title" />
    <div class="articleList__wrapper">
      <Article
        v-for="(article, index) in paginatedArticles"
        :key="index"
        :titleText="article.title"
        :author="article.author"
        :commentsNumber="article.commentsNumber"
        :contentText="article.contentText"
      />
    </div>
    <div class="articleList__navigation">
      <div
        v-for="page in totalPages"
        :key="page"
        :class="[
          'articleList__button',
          { 'articleList__button--active': page === currentPage },
        ]"
        @click="changePage(page)"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../General/Title.vue";
import Article from "./Article.vue";
import { useArticleStore } from "../../stores/articleStore";
import { storeToRefs } from "pinia";

export default {
  components: { Title, Article },
  setup() {
    const articleStore = useArticleStore();

    const { articles, currentPage, paginatedArticles, totalPages } =
      storeToRefs(articleStore);

    const changePage = (page) => {
      articleStore.changePage(page);
    };

    return {
      articles,
      currentPage,
      paginatedArticles,
      totalPages,
      changePage,
    };
  },
};
</script>
