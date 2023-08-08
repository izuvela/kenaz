<template>
  <div id="carouselPrimary" class="carousel slide slider">
    <div class="carousel-inner">
      <div
        class="carousel-item slider__item"
        v-for="(item, index) in items"
        :key="index"
        :class="{ active: index === 0 }"
      >
        <img :src="item.image" :alt="item.alt" />
        <div class="slider__content">
          <div class="slider__info">
            <div class="slider__date">August 26, 2013</div>
            <img :src="commentIcon" class="slider__icon" />
            <div class="slider__comments">22 Comments</div>
          </div>
          <div class="slider__title">{{ item.title }}</div>
          <button class="slider__button">Read article</button>
        </div>
      </div>
    </div>
    <button
      class="slider__left"
      type="button"
      data-bs-target="#carouselPrimary"
      data-bs-slide="prev"
    >
      <Icon name="left-arrow-slider" />
    </button>
    <button
      class="slider__right"
      type="button"
      data-bs-target="#carouselPrimary"
      data-bs-slide="next"
    >
      <Icon name="right-arrow-slider" />
    </button>
  </div>
</template>

<script>
import sliderImage1 from "../../assets/slider-image-1.png";
import sliderImage2 from "../../assets/slider-image-2.jpg";
import commentIcon from "../../assets/comment-icon.png";
import Icon from "../General/Icon.vue";

export default {
  data() {
    return {
      items: [
        {
          image: sliderImage1,
          alt: "Nature",
          title: "'Margot' breathlessly reimagines Anne Frank's sister",
        },
        {
          image: sliderImage2,
          alt: "Drawing",
          title: "Title 2",
        },
      ],
      commentIcon,
    };
  },
  components: { Icon },
};
</script>
