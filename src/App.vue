<template>
  <Header />
  <Navigation />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from "./components/Header/Header.vue";
import Navigation from "./components/Header/Navigation.vue";
import Footer from "./components/Footer/Footer.vue";
export default {
  components: { Header, Navigation, Footer },
};
</script>
