<template>
  <CategorySection
    :color="color"
    :titleText="titleText"
    :isSingleItem="isSingleItem"
  >
    <template #link>
      <div class="categorySection__navigation">
        <Icon
          :name="leftArrowName"
          @click="slidePrev"
          class="categorySection__navIcon"
          :class="{ 'categorySection__navIcon--faded': isBeginning }"
        />
        <Icon
          :name="rightArrowName"
          @click="slideNext"
          class="categorySection__navIcon"
          :class="{ 'categorySection__navIcon--faded': isEnd }"
        />
      </div>
    </template>
    <swiper
      :slides-per-view="slidesPerView"
      :space-between="30"
      @swiper="onSwiper"
      class="categorySection__articles"
      :class="articlesClass"
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
import { ref, computed } from "vue";

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
    color: {
      required: true,
      type: String,
    },
    slidesPerView: {
      required: true,
      type: Number,
    },
    leftArrowName: {
      required: true,
      type: String,
    },
    rightArrowName: {
      required: true,
      type: String,
    },
    isSingleItem: {
      type: Boolean,
      default: false,
    },
    articlesClass: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const swiper = ref(null);
    const onSwiper = (swiperInstance) => {
      swiper.value = swiperInstance;
    };

    const isBeginning = computed(() => swiper.value?.isBeginning || false);
    const isEnd = computed(() => swiper.value?.isEnd || false);

    const slidePrev = () => {
      if (swiper.value) swiper.value.slidePrev();
    };

    const slideNext = () => {
      if (swiper.value) swiper.value.slideNext();
    };

    return {
      swiper,
      onSwiper,
      isBeginning,
      isEnd,
      slidePrev,
      slideNext,
    };
  },
};
</script>
