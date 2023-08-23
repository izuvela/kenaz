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
        />
        <div class="comments__subcomments"></div>
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
    };
  },
  methods: {
    addComment() {
      if (
        this.newComment.author &&
        this.newComment.email &&
        this.newComment.text
      ) {
        this.newComment.date = new Date();
        this.comments.push({ ...this.newComment });
        this.newComment.author = "";
        this.newComment.email = "";
        this.newComment.text = "";
      }
    },
    handleSubmit(event) {
      event.preventDefault();

      const form = this.$refs.commentForm;
      let allFilled = true;

      for (const input of form.querySelectorAll("input, textarea")) {
        if (input.value.trim() === "") {
          allFilled = false;
          break;
        }
      }

      if (!allFilled) {
        alert("Please fill out all fields.");
      } else {
        this.newComment.author = form.querySelector('input[name="name"]').value;
        this.newComment.email = form.querySelector('input[name="email"]').value;
        this.newComment.text = form.querySelector(
          'textarea[name="comment"]'
        ).value;
        
        this.addComment();
        form.reset();
      }
    },
  },
};
</script>
