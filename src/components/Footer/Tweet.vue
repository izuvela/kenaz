<template>
  <div class="tweet">
    <div class="tweet__header">
      <Icon name="twitter" />
      <div class="twitter__user">
        <div class="twitter__name">
          Envato <span class="twitter__tag">@envato</span>
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
  },
};
</script>
