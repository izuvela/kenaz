<template>
  <div class="navigation">
    <div class="navigation__wrapper">
      <router-link to="/news" class="navigation__link navigation__link_news">
        <div class="navigation__text">NEWS</div>
      </router-link>
      <router-link
        to="/business"
        class="navigation__link navigation__link_business"
      >
        <div class="navigation__text">BUSINESS</div>
      </router-link>
      <router-link to="/sport" class="navigation__link navigation__link_sport">
        <div class="navigation__text">SPORT</div>
      </router-link>
      <router-link to="/life" class="navigation__link navigation__link_life">
        <div class="navigation__text">LIFE</div>
      </router-link>
      <router-link to="/tech" class="navigation__link navigation__link_tech">
        <div class="navigation__text">TECH</div>
      </router-link>
      <router-link
        to="/travel"
        class="navigation__link navigation__link_travel"
      >
        <div class="navigation__text">TRAVEL</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>
