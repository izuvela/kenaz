<template>
  <div id="carouselSecondary" class="carousel slide sliderSecondary">
    <div class="carousel-inner">
      <div
        class="carousel-item sliderSecondary__item"
        v-for="(item, index) in items"
        :key="index"
        :class="{ active: index === 0 }"
      >
        <img :src="item.image" :alt="item.alt" class="sliderSecondary__image" />
      </div>
    </div>
    <img :src="sliderSearch" alt="search" class="sliderSecondary__search" />
    <button
      class="sliderSecondary__left"
      type="button"
      data-bs-target="#carouselSecondary"
      data-bs-slide="prev"
    >
      <Icon name="left-arrow-slider" />
    </button>
    <button
      class="sliderSecondary__right"
      type="button"
      data-bs-target="#carouselSecondary"
      data-bs-slide="next"
    >
      <Icon name="right-arrow-slider" />
    </button>
    <div class="sliderSecondary__content">
      <img
        class="sliderSecondary__smallImage"
        v-for="(item, index) in items"
        :key="index"
        :src="item.image"
        :alt="item.alt"
        data-bs-target="#carouselSecondary"
        :data-bs-slide-to="index"
      />
    </div>
  </div>
</template>

<script>
import sliderImage3 from "../assets/slider-image-3.jpg";
import sliderImage4 from "../assets/slider-image-4.jpg";
import sliderImage5 from "../assets/slider-image-5.jpg";
import sliderImage6 from "../assets/slider-image-6.jpg";
import sliderImage7 from "../assets/slider-image-7.jpg";
import sliderImage8 from "../assets/slider-image-8.jpg";
import sliderImage9 from "../assets/slider-image-9.jpg";
import sliderSearch from "../assets/search-slider.png";
import commentIcon from "../assets/comment-icon.png";
import Icon from "./General/Icon.vue";

export default {
  data() {
    return {
      items: [
        {
          image: sliderImage3,
          alt: "bridge",
        },
        {
          image: sliderImage4,
          alt: "balconies",
        },
        {
          image: sliderImage5,
          alt: "school",
        },
        {
          image: sliderImage6,
          alt: "birch",
        },
        {
          image: sliderImage7,
          alt: "landscape",
        },
        {
          image: sliderImage8,
          alt: "cliff",
        },
        {
          image: sliderImage9,
          alt: "children",
        },
      ],
      commentIcon,
      sliderSearch,
    };
  },
  components: { Icon },
};
</script>
