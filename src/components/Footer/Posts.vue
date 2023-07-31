<template>
  <div class="posts">
    <Title color="white" :text="titleText" class="posts__title" />
    <Post />
    <Divider class="posts__divider" />
    <Post />
    <Divider class="posts__divider" />
    <Post />
  </div>
</template>

<script>
import Title from "../General/Title.vue";
import Post from "./Post.vue";
import Divider from "./Divider.vue";

export default {
  components: { Title, Post, Divider },
  props: {
    titleText: {
      required: true,
      type: String,
    },
  },
};
</script>
