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
  </div>
</template>

<script>
import Title from "../General/Title.vue";
import Comment from "./Comment.vue";

export default { components: { Title, Comment } };
</script>
