<template>
  <CategorySection
    color="techYellow"
    titleText="News Carousel"
    type="newsCarousel"
  >
    <template #link>
      <div class="categorySection__navigation">
        <Icon
          name="yellowLeftArrow"
          @click="swiper.slidePrev()"
          class="categorySection__navIcon"
        />
        <Icon
          name="yellowRightArrow"
          @click="swiper.slideNext()"
          class="categorySection__navIcon"
        />
      </div>
    </template>
    <swiper
      :slides-per-view="2"
      :space-between="30"
      @swiper="onSwiper"
      class="categorySection__articles categorySection__articles_newsCarousel"
    >
      <swiper-slide v-for="(article, index) in articles" :key="index">
        <SectionArticle :titleText="article.title" :type="article.type" />
      </swiper-slide>
    </swiper>
  </CategorySection>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import Icon from "../General/Icon.vue";
import Title from "../General/Title.vue";
import SectionArticle from "../Home/SectionArticle.vue";
import CategorySection from "../Home/CategorySection.vue";
import { ref } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Icon,
    Title,
    SectionArticle,
    CategorySection,
  },
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const swiper = ref(null);
    const onSwiper = (swiperInstance) => {
      swiper.value = swiperInstance;
    };
    return {
      swiper,
      onSwiper,
    };
  },
};
</script>
