<template>
  <div class="categorySection">
    <div class="categorySection__color" :class="color"></div>
    <div class="categorySection__content">
      <div class="categorySection__info">
        <Title class="categorySection__title" :text="titleText" color="titleGrey"/>
        <Link to="/category" text="See all" class="categorySection__link" />
      </div>
      <div
        class="categorySection__articles"
        :class="`categorySection__articles_${type}`"
      >
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
      required: true,
    },
    titleText: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
