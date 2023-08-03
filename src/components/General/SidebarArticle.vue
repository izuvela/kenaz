<template>
  <div class="sidebarArticle">
    <div class="sidebarArticle__wrapper">
      <div class="sidebarArticle__comments">
        <img :src="commentIcon" class="sidebarArticle__icon" />
        <div class="sidebarArticle__number">5</div>
      </div>
      <div class="sidebarArticle__date">August 26, 2013</div>
      <div class="sidebarArticle__title">
        Palestinians call off peace talks after clash
      </div>
    </div>
    <img :src="sidebarImage" class="sidebarArticle__image" />
  </div>
</template>

<script>
import commentIcon from "../../assets/commentIconGrey.png";
import sidebarImage from "../../assets/sidebarImage.png";
import Icon from "../General/Icon.vue";

export default {
  data() {
    return {
      commentIcon,
      sidebarImage,
    };
  },
  components: { Icon },
};
</script>
