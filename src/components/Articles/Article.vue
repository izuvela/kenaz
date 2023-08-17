<template>
  <div class="article">
    <Title :text="titleText" color="titleGrey" class="article__title" />
    <div class="article__info">
      <div class="article__dateGroup">
        <img
          src="../../assets/calendar.png"
          alt="calendar icon"
          class="article__dateIcon"
        />
        <div class="article__date">August 26, 2013</div>
      </div>
      <div class="article__author">Author: {{ author }}</div>
      <div class="article__comments">{{ commentsNumber }} Comments</div>
    </div>
    <div class="article__content">
      <img
        src="../../assets/slider-image-1.png"
        alt="article image"
        class="article__image"
      />
      <div class="article__textGroup">
        <div class="article__text">{{ contentText }}</div>
        <div class="article__button">Read article</div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../General/Title.vue";

export default {
  components: { Title },
  props: {
    titleText: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    commentsNumber: {
      type: String,
      required: true,
    },
    contentText: {
      type: String,
      required: true,
    },
  },
};
</script>
