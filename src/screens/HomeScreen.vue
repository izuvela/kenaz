<template>
  <div class="content">
    <div class="content__wrapper">
      <Banner width="940" height="120" />
      <Slider />
      <CategorySection titleText="News" color="newsBlue" type="news">
        <SectionArticle
          v-for="(article, index) in newsArticles"
          :key="index"
          :titleText="article.title"
          :number="article.number"
        />
      </CategorySection>
      <CategorySection titleText="Sport" color="sportGreen" type="news">
        <SectionArticle
          v-for="(article, index) in sportArticles"
          :key="index"
          :titleText="article.title"
        />
      </CategorySection>
      <Banner width="620" height="120" />
      <CategorySection titleText="Business" color="businessRed" type="business">
        <SectionArticle
          v-for="(article, index) in businessArticles"
          :key="index"
          :titleText="article.title"
          :type="article.type"
        />
      </CategorySection>
      <Banner width="620" height="120" />
    </div>
  </div>
</template>

<script>
import CategorySection from "../components/CategorySection.vue";
import Banner from "../components/General/Banner.vue";
import SectionArticle from "../components/SectionArticle.vue";
import Slider from "../components/Slider.vue";

export default {
  components: {
    Banner,
    Slider,
    CategorySection,
    SectionArticle,
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
    };
  },
};
</script>
