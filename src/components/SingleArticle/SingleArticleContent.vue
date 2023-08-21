<template>
  <div class="singleArticleContent">
    <div class="singleArticleContent__text">{{ firstParagraph }}</div>
    <img
      src="../../assets/article-image-content.png"
      alt="article image"
      class="singleArticleContent__image"
    />
    <div class="singleArticleContent__text">{{ secondParagraph }}</div>
  </div>
</template>

<script>
export default {
  props: {
    firstParagraph: {
      type: String,
      required: true,
    },
    secondParagraph: {
      type: String,
      required: true,
    },
  },
};
</script>
