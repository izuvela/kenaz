<template>
  <div
    class="categorySection"
    :class="{ categorySection_singleItemCarousel: isSingleItem }"
  >
    <div class="categorySection__color" :class="color"></div>
    <div
      class="categorySection__content"
      :class="{ categorySection__content_singleItemCarousel: isSingleItem }"
    >
      <div class="categorySection__info">
        <Title
          class="categorySection__title"
          :text="titleText"
          color="titleGrey"
        />
        <slot name="link"></slot>
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
      required: false,
    },
    isSingleItem: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
