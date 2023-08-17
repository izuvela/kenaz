<template>
  <div class="tweet">
    <div class="tweet__header">
      <Icon name="twitter" />
      <div class="twitter__user">
        <div class="twitter__name">
          {{ name }} <span class="twitter__tag">@{{ tag }}</span>
        </div>
      </div>
    </div>
    <div class="twitter__text">{{ text }}</div>
  </div>
</template>

<script>
import Icon from "../General/Icon.vue";
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    tag: {
      required: true,
      type: String,
    },
  },
};
</script>
