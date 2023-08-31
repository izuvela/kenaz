<template>
  <Header />
  <Navigation />
  <div class="content">
    <div class="content__wrapper">
      <Banner width="940" height="120" />
      <Slider v-if="showSlider" />
      <router-view></router-view>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "./components/Header/Header.vue";
import Navigation from "./components/Header/Navigation.vue";
import Footer from "./components/Footer/Footer.vue";
import Banner from "./components/General/Banner.vue";
import Slider from "./components/Sliders/Slider.vue";

export default {
  components: { Header, Navigation, Footer, Banner, Slider },
  computed: {
    showSlider() {
      return (
        this.$route.path === "/" || !this.$route.path.startsWith("/article/")
      );
    },
  },
};
</script>
