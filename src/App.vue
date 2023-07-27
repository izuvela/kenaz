<template>
  <Header />
  <Navigation />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Header, Navigation, Footer },
};
</script>

<style lang="scss" scoped></style>
