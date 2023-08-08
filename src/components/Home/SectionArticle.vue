<template>
  <div class="sectionArticle" :class="`sectionArticle_${type}`">
    <img
      :src="Image"
      alt="Nature"
      class="sectionArticle__image"
      :class="`sectionArticle__image_${type}`"
    />
    <div class="sectionArticle__content">
      <div class="sectionArticle__info">
        <div class="sectionArticle__date">August 26, 2013</div>
        <div class="sectionArticle__number">{{ number }}</div>
      </div>
      <div class="sectionArticle__title">{{ titleText }}</div>
    </div>
  </div>
</template>

<script>
import Image from "../../assets/slider-image-1.png";
import Title from "../General/Title.vue";

export default {
  data() {
    return {
      Image,
    };
  },
  components: { Title },
  props: {
    titleText: {
      required: true,
      type: String,
    },
    number: {
      type: String,
    },
    type: {
      type: String,
    },
  },
};
</script>
