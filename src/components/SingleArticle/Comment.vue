<template>
  <div class="comment" :class="{ 'comment--subcomment': isSubcomment }">
    <img
      src="../../assets/thumbnail-avatar.png"
      alt="avatar"
      class="comment__image"
    />
    <div class="comment__content">
      <div class="comment__top">
        <div class="comment__info">
          <div class="comment__author">{{ author }}</div>
          <div class="comment__date">{{ formattedDate }}</div>
        </div>
        <div
          class="comment__replyButton"
          v-if="!isSubcomment"
          @click="$emit('reply')"
        >
          Reply
        </div>
      </div>
      <div class="comment__text">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: null,
    },
    text: {
      type: String,
      required: true,
    },
    isSubcomment: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    formattedDate() {
      console.log("Datum u komponenti:" + this.date);
      if (!this.date) return "Jan 2nd, 2012 2:35 pm";

      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const nth = (d) => {
        if (d > 3 && d < 21) return "th";
        switch (d % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      };

      const dateObj = new Date(this.date);
      const day = dateObj.getDate();
      const month = months[dateObj.getMonth()];
      const year = dateObj.getFullYear();
      let hours = dateObj.getHours();
      const minutes = dateObj.getMinutes().toString().padStart(2, "0");

      const period = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours || 12;

      return `${month} ${day}${nth(
        day
      )}, ${year} ${hours}:${minutes} ${period}`;
    },
  },
};
</script>
