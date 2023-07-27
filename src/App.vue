<template>
  <Header />
  <Navigation />
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
export default {
  components: { Header, Navigation },
};
</script>

<style lang="scss" scoped></style>
