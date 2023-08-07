<template>
  <CategorySection
    color="travelBrown"
    :titleText="titleText"
    :isSingleItem="true"
  >
    <template #link>
      <div class="categorySection__navigation">
        <Icon
          name="brownLeftArrow"
          @click="swiper.slidePrev()"
          class="categorySection__navIcon"
        />
        <Icon
          name="brownRightArrow"
          @click="swiper.slideNext()"
          class="categorySection__navIcon"
        />
      </div>
    </template>
    <swiper
      :slides-per-view="1"
      :space-between="30"
      @swiper="onSwiper"
      class="categorySection__articles categorySection__articles_singleItemCarousel"
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
import Icon from "./General/Icon.vue";
import Title from "../components/General/Title.vue";
import SectionArticle from "./SectionArticle.vue";
import CategorySection from "./CategorySection.vue";
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
    titleText: {
      required: true,
      type: String,
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
