<template>
  <Header />
  <div>test</div>
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: { Header },
};
</script>

<style lang="scss" scoped></style>
