<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__left-side">
        <Logo :img="LogoPng" alt="logo" :isSvg="false" to="/category" />
        <div class="header__title">Kenaz</div>
      </div>
      <div class="header__right-side">
        <div class="header__links">
          <div class="header__link"><span>Media</span></div>
          <div class="header__link"><span>Marketing</span></div>
          <div class="header__link"><span>Contact</span></div>
        </div>
        <Logo :img="SearchSvg" alt="search" :isSvg="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from "./Logo.vue";
import LogoPng from "../../assets/logo-header.png";
import SearchSvg from "../../assets/search.svg?component";
</script>
