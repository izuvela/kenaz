<template>
  <div class="singleArticleImage">
    <img
      src="../../assets/article-image.png"
      alt="article image"
      class="singleArticleImage__image"
    />
    <div class="singleArticleImage__text">
      <div class="singleArticleImage__date">{{ date }}</div>
      <div class="singleArticleImage__title">{{ titleText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleText: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
};
</script>
