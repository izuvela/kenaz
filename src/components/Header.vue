<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__left-side">
        <Logo :img="LogoSvg" alt="logo" />
        <div class="header__title"></div>
      </div>
      <div class="header__right-side">
        <div class="header__link"></div>
        <div class="header__link"></div>
        <div class="header__link"></div>
        <Logo :img="SearchSvg" alt="search" />
        
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import LogoSvg from "../assets/logo-header.svg?component";
import SearchSvg from "../assets/search-header.svg?component";

export default {
  components: {
    Logo,
  },
  data() {
    return {
      LogoSvg,
      SearchSvg
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.header {
  background-color: $color-primaryBlack;
}
</style>
