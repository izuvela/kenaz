<template>
  <router-link :to="`/article/post-1`">
    <div class="post" :class="{ 'post--sidebar': isSidebar }">
      <div
        class="post__wrapper"
        :class="{ 'post__wrapper--sidebar': isSidebar }"
      >
        <div class="post__text">
          <div class="post__top" v-if="isSidebar === true">
            <div class="post__comments">
              <img :src="commentIcon" class="post__icon" />
              <div
                class="post__number"
                :class="{ 'post__number--sidebar': isSidebar }"
              >
                5
              </div>
            </div>
            <div
              class="post__date"
              :class="{ 'post__date--sidebar': isSidebar }"
            >
              August 26, 2013
            </div>
          </div>
          <div class="post__top" v-else>
            <div class="post__subtext">
              <div class="post__date">August 26, 2013</div>
              <div class="post__number">5</div>
            </div>
          </div>
          <div
            class="post__title"
            :class="{ 'post__title--sidebar': isSidebar }"
          >
            Palestinians call off peace talks after clash
          </div>
        </div>
        <img :src="postImage" class="post__image" />
      </div>
    </div>
  </router-link>
</template>

<script>
import commentIcon from "../../assets/commentIconGrey.png";
import womanSun from "../../assets/woman-sun.png";
import otherImage from "../../assets/sidebarImage.png";
import Icon from "../General/Icon.vue";

export default {
  props: {
    isSidebar: {
      type: Boolean,
      required: false,
    },
    id: {
      type: String,
    }
  },
  components: { Icon },
  data() {
    return {
      commentIcon,
    };
  },
  computed: {
    postImage() {
      return this.isSidebar ? otherImage : womanSun;
    },
  },
};
</script>
