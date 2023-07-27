<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__left-side">
        <Logo :img="LogoSvg" alt="logo" />
        <div class="header__title">Kenaz</div>
      </div>
      <div class="header__right-side">
        <div class="header__links">
          <div class="header__link"><span>Media</span></div>
          <div class="header__link"><span>Marketing</span></div>
          <div class="header__link"><span>Contact</span></div>
        </div>
        <Logo :img="SearchSvg" alt="search" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from "./Logo.vue";
import LogoSvg from "../assets/logo-header.svg?component";
import SearchSvg from "../assets/search.svg?component";
import Icon from "../components/Icon.vue";
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.header {
  @include flex-display($justify-content: center);
  background-color: $color-primaryBlack;
}

.header__wrapper {
  @include flex-display($justify-content: space-between);
  width: $max-width;
}

.header__left-side {
  @include flex-display($gap: 11px);
}

.header__title {
  @include flex-display($align-items: center);
  font-size: 24px;
  color: $color-white;
  font-family: $font-primary;
  font-weight: 400;
  line-height: 27px;
  align-self: flex-end;
  padding-bottom: 7.5px;
}

.header__right-side {
  @include flex-display($align-items: center);
}

.header__links {
  @include flex-display($align-items: center);

  .header__link {
    color: $color-white;
    font-family: $font-secondary;
    font-size: 14px;
    line-height: 27px;
    font-weight: 400;

    &:nth-child(1) {
      width: 76px;
    }
    &:nth-child(2) {
      width: 106px;
    }
    &:nth-child(3) {
      width: 80px;
    }

    span {
      cursor: pointer;
    }
  }
}
</style>
