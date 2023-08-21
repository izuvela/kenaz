<template>
  <div class="aboutTheAuthor">
    <Title text="About the Author" color="titleGrey" />
    <div class="aboutTheAuthor__content">
      <img
        src="../../assets/author-image.png"
        alt="author image"
        class="aboutTheAuthor__image"
      />
      <div class="aboutTheAuthor__text">
        Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec
        hac ultrices nulla non netus. Placerat vehicula donec non suscipit
        egestas, augue vel suspendisse. Et felis venenatis blandit sed est
        ultrices, adipiscing urna, at aliquam nullam facilisis aliquet sapien,
        eget duis consectetuer tristique nunc vitae erat, mi purus nisl lorem.
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../General/Title.vue";

export default { components: { Title } };
</script>
