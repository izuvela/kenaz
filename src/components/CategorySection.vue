<template>
  <div class="categorySection">
    <div class="categorySection__color" :class="color"></div>
    <div class="categorySection__content">
      <div class="categorySection__info">
        <Title class="categorySection__title" :text="titleText" />
        <Link to="/category" text="See all" class="categorySection__link" />
      </div>
      <div class="categorySection__articles">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/General/Title.vue";
import Link from "./General/Link.vue";
export default {
  components: {
    Title,
    Link,
  },
  props: {
    color: {
      type: String,
      required: false,
    },
    titleText: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
