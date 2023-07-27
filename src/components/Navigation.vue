<template>
  <div class="navigation">
    <div class="navigation__wrapper">
      <router-link to="/category" class="navigation__link navigation__link_news">
        <div class="navigation__text">NEWS</div>
      </router-link>
      <router-link to="/category" class="navigation__link navigation__link_business">
        <div class="navigation__text">BUSINESS</div>
      </router-link>
      <router-link to="/category" class="navigation__link navigation__link_sport">
        <div class="navigation__text">SPORT</div>
      </router-link>
      <router-link to="/category" class="navigation__link navigation__link_life">
        <div class="navigation__text">LIFE</div>
      </router-link>
      <router-link to="/category" class="navigation__link navigation__link_tech">
        <div class="navigation__text">TECH</div>
      </router-link>
      <router-link to="/category" class="navigation__link navigation__link_travel">
        <div class="navigation__text">TRAVEL</div>
      </router-link>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";
.navigation {
  height: 50px;
  background-color: $color-primaryPurple;
  @include flex-display($justify-content: center);
}

.navigation__wrapper {
  @include flex-display($justify-content: center);
  width: $max-width;
  height: 100%;
}

.navigation__link {
  @include flex-display($justify-content: center, $align-items: center);
  text-align: center;
  height: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3px;
    transition: all 0.3s;
    z-index: 1;
  }

  &:hover::before {
    height: 100%;
  }

  &_news {
    width: 93px;

    &::before {
      background-color: $color-newsBlue;
    }
  }

  &_business {
    width: 129px;

    &::before {
      background-color: $color-businessRed;
    }
  }

  &_sport {
    width: 98px;

    &::before {
      background-color: $color-sportGreen;
    }
  }

  &_life {
    width: 78px;

    &::before {
      background-color: $color-lifeBlue;
    }
  }

  &_tech {
    width: 88px;

    &::before {
      background-color: $color-techYellow;
    }
  }

  &_travel {
    width: 110px;

    &::before {
      background-color: $color-travelBrown;
    }
  }
}

.navigation__text {
  font-size: 18px;
  color: $color-white;
  font-family: $font-primary;
  font-weight: 700;
  line-height: 21.6px;
  z-index: 2;
}
</style>
