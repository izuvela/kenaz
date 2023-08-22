<template>
  <SingleArticleImage
    titleText="'Margot' breathlessly reimagines Anne Frank's sister"
    date="August 26, 2013"
  />
  <div class="content__group">
    <div class="content__left">
      <SingleArticleContent
        firstParagraph="Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.Sed posuere consectetur est at lobortis. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo."
        secondParagraph="Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna, at aliquam nullam facilisis aliquet sapien, eget duis consectetuer tristique nunc vitae erat, mi purus nisl lorem. Ac magna lobortis non, vulputate vitae viverra. Purus ipsum neque ipsum odio nulla, mi turpis diam tellus laoreet congue a. Rhoncus maecenas, sit suspendisse, condimentum purus convallis dui hendrerit. Purus ipsum neque ipsum odio nulla, mi turpis diam tellus laoreet congue. "
      />
      <AboutTheAuthor />
      <Comments />
      <Banner width="620" height="120" />
    </div>
    <div class="content__right">
      <Sidebar :links="sideLinks" />
      <SideBanner />
    </div>
  </div>
</template>

<script>
import Banner from "../components/General/Banner.vue";
import SideBanner from "../components/General/SideBanner.vue";
import Sidebar from "../components/General/Sidebar.vue";
import Slider from "../components/Sliders/Slider.vue";
import ArticleList from "../components/Articles/ArticleList.vue";
import SingleArticleImage from "../components/SingleArticle/SingleArticleImage.vue";
import SingleArticleContent from "../components/SingleArticle/SingleArticleContent.vue";
import AboutTheAuthor from "../components/SingleArticle/AboutTheAuthor.vue";
import Comments from "../components/SingleArticle/Comments.vue";

export default {
  components: {
    Banner,
    Slider,
    Sidebar,
    SideBanner,
    ArticleList,
    SingleArticleImage,
    SingleArticleContent,
    AboutTheAuthor,
    Comments
},

  data() {
    return {
      sideLinks: [
        { text: "Popular" },
        { text: "Top Rated" },
        { text: "Comments" },
      ],
    };
  },
};
</script>
