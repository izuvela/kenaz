<template>
  <div class="comments">
    <Title text="Comments" color="titleGrey" class="comments__title" />
    <div class="comments__list">
      <div
        class="comments__group"
        v-for="(comment, index) in comments"
        :key="index"
      >
        <Comment
          :author="comment.author"
          :text="comment.text"
          :date="comment.date"
          @reply="showReplyForm(index)"
        />
        <div class="comments__subcomments">
          <Comment
            v-for="(subcomment, subIndex) in comment.subcomments"
            :key="subIndex"
            :author="subcomment.author"
            :text="subcomment.text"
            :date="subcomment.date"
            isSubcomment
          />
        </div>
        <div v-if="replyToCommentIndex === index" class="comments__formWrapper">
          <form
            class="comments__form comments__form--subcomment"
            :ref="`replyForm-${index}`"
            @submit.prevent="handleReplySubmit(index)"
          >
            <input
              type="text"
              name="name_subcomment"
              class="comments__input"
              placeholder="Name"
            />
            <input
              type="email"
              name="email_subcomment"
              class="comments__input"
              placeholder="Email Address"
            />
            <textarea
              name="comment_subcomment"
              class="comments__textarea"
              placeholder="Comment"
            ></textarea>
            <button class="comments__button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <Title
      text="Add Your Comment"
      color="titleGrey"
      class="comments__title comments__title--secondary"
    />
    <div class="comments__text">
      Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec
      hac ultrices nulla non netus. Placerat vehicula donec non suscipit
      egestas, augue vel suspendisse. Et felis venenatis blandit sed est
      ultrices, adipiscing urna.
    </div>
    <form class="comments__form" ref="commentForm" @submit="handleSubmit">
      <input
        type="text"
        name="name"
        class="comments__input"
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        class="comments__input"
        placeholder="Email Address"
      />
      <textarea
        name="comment"
        class="comments__textarea"
        placeholder="Comment"
      ></textarea>
      <button class="comments__button" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import Title from "../General/Title.vue";
import Comment from "./Comment.vue";
import { reactive } from "vue";

export default {
  components: { Title, Comment },
  data() {
    return {
      comments: [
        {
          author: "Matt Adams",
          text: "Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna.",
          date: null,
        },
        {
          author: "Matt Adams",
          text: "Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna.",
          date: null,
        },
        {
          author: "Matt Adams",
          text: "Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna.",
          date: null,
        },
      ],
      newComment: {
        author: "",
        email: "",
        text: "",
        date: null,
      },
      replyToCommentIndex: null,
    };
  },
  computed: {
    isFormFilled() {
      return (
        this.newComment.author && this.newComment.email && this.newComment.text
      );
    },
  },
  methods: {
    showReplyForm(index) {
      this.replyToCommentIndex = index;
    },
    addMainComment() {
      this.comments.push({ ...this.newComment, subcomments: [] });
      this.resetNewComment();
    },
    addSubComment() {
      const targetComment = this.comments[this.replyToCommentIndex];
      if (!targetComment.subcomments) {
        targetComment.subcomments = [];
      }
      targetComment.subcomments.push({ ...this.newComment });
      this.resetNewComment();
    },
    resetNewComment() {
      this.newComment.author = "";
      this.newComment.email = "";
      this.newComment.text = "";
      this.newComment.date = null;
      this.replyToCommentIndex = null;
    },
    handleSubmit(event) {
      event.preventDefault();

      const form = this.$refs.commentForm;
      const author = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const text = form.querySelector('textarea[name="comment"]').value.trim();

      if (!author || !email || !text) {
        alert("Please fill out all fields.");
        return;
      }

      this.newComment.date = new Date();
      this.newComment.author = author;
      this.newComment.email = email;
      this.newComment.text = text;

      if (this.replyToCommentIndex !== null) {
        this.addSubComment();
      } else {
        this.addMainComment();
      }
      form.reset();
    },

    handleReplySubmit(commentIndex) {
      const form = this.$refs[`replyForm-${commentIndex}`][0];
      const author = form
        .querySelector('input[name="name_subcomment"]')
        .value.trim();
      const email = form
        .querySelector('input[name="email_subcomment"]')
        .value.trim();
      const text = form
        .querySelector('textarea[name="comment_subcomment"]')
        .value.trim();

      if (!author || !email || !text) {
        alert("Please fill out all fields.");
        return;
      }

      this.newComment.date = new Date();
      this.newComment.author = author;
      this.newComment.email = email;
      this.newComment.text = text;
      this.replyToCommentIndex = commentIndex;
      this.addSubComment();
      form.reset();
    },
  },
};
</script>
