<template>
  <div class="content">
    <div class="content__wrapper">
      <Banner width="940" height="120" />
      <Slider />
      <div class="content__group">
        <div class="content__left">
          <CategorySection titleText="News" color="newsBlue" type="news">
            <template v-slot:link>
              <Link
                to="/category"
                text="See all"
                class="categorySection__link"
              />
            </template>
            <SectionArticle
              v-for="(article, index) in newsArticles"
              :key="index"
              :titleText="article.title"
              :number="article.number"
            />
          </CategorySection>
          <CategorySection titleText="Sport" color="sportGreen" type="news">
            <template v-slot:link>
              <Link
                to="/category"
                text="See all"
                class="categorySection__link"
              />
            </template>
            <SectionArticle
              v-for="(article, index) in sportArticles"
              :key="index"
              :titleText="article.title"
            />
          </CategorySection>
          <Banner width="620" height="120" />
          <CategorySection
            titleText="Business"
            color="businessRed"
            type="business"
          >
            <template v-slot:link>
              <Link
                to="/category"
                text="See all"
                class="categorySection__link"
              />
            </template>
            <SectionArticle
              v-for="(article, index) in businessArticles"
              :key="index"
              :titleText="article.title"
              :type="article.type"
            />
          </CategorySection>
          <Banner width="620" height="120" />
          <NewsCarousel :articles="newsCarouselArticles" />
        </div>
        <div class="content__right">
          <Sidebar />
          <SideBanner />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategorySection from "../components/CategorySection.vue";
import Banner from "../components/General/Banner.vue";
import SideBanner from "../components/General/SideBanner.vue";
import Sidebar from "../components/General/Sidebar.vue";
import SectionArticle from "../components/SectionArticle.vue";
import Slider from "../components/Slider.vue";
import Link from "../components/General/Link.vue";
import Icon from "../components/General/Icon.vue";
import NewsCarousel from "../components/NewsCarousel.vue";

export default {
  components: {
    Banner,
    Slider,
    CategorySection,
    SectionArticle,
    Sidebar,
    SideBanner,
    Link,
    Icon,
    NewsCarousel,
  },

  data() {
    return {
      newsArticles: [
        {
          title: "For Obama, MLK's shadow looms large ahead of speech",
          number: "14",
        },
        {
          title: "NASA releases portrait of a planet waving at Saturn",
          number: "22",
        },
        {
          title: "Patriotsvv make cuts ... and Tim Tebow survives (so far)",
          number: "5",
        },
      ],
      sportArticles: [
        { title: "For Obama, MLK's shadow looms large ahead of speech" },
        { title: "NASA releases portrait of a planet waving at Saturn" },
        { title: "Patriotsvv make cuts ... and Tim Tebow survives (so far)" },
      ],
      businessArticles: [
        {
          title: "For Obama, MLK's shadow looms large ahead of speech",
          type: "business",
        },
        {
          title: "For Obama, MLK's shadow looms large ahead of speech",
          type: "business",
        },
        {
          title: "For Obama, MLK's shadow looms large ahead of speech",
          type: "business",
        },
        {
          title: "For Obama, MLK's shadow looms large ahead of speech",
          type: "business",
        },
      ],
      newsCarouselArticles: [
        {
          title: "For Obama, MLK's shadow looms large ahead of speech",
          type: "newsCarousel",
        },
        {
          title: "NASA releases portrait of a planet waving at Saturn",
          type: "newsCarousel",
        },
        {
          title: "Patriotsvv make cuts ... and Tim Tebow survives (so far)",
          type: "newsCarousel",
        },
      ],
    };
  },
};
</script>
