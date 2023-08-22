<template>
  <div class="comments">
    <Title text="Comments" color="titleGrey" class="comments__title" />
    <div class="comments__list">
      <Comment
        author="Matt Adams"
        text="Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna."
      />
      <Comment
        author="Matt Adams"
        text="Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna."
      />
      <Comment
        author="Matt Adams"
        text="Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna."
      />
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
    <div class="comments__form">
      <input
        type="text"
        name="name"
        class="comments__input"
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        class="comments__input"
        placeholder="Email Address"
        required
      />
      <textarea
        name="comment"
        class="comments__textarea"
        placeholder="Comment"
        required
      ></textarea>
    </div>
    <button class="comments__button" type="submit">Submit</button>
  </div>
</template>

<script>
import Title from "../General/Title.vue";
import Comment from "./Comment.vue";

export default { components: { Title, Comment } };
</script>
