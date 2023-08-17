<template>
  <div class="articleList">
    <Title text="News" color="titleGrey" class="articleList__title" />
    <div class="articleList__wrapper">
      <Article
        v-for="(article, index) in articles"
        :key="index"
        :titleText="article.title"
        :author="article.author"
        :commentsNumber="article.commentsNumber"
        :contentText="article.contentText"
      />
    </div>
    <div class="articleList__navigation">
      <div class="articleList__button">1</div>
    </div>
  </div>
</template>

<script>
import Title from "../General/Title.vue";
import Article from "./Article.vue";

export default {
  components: { Title, Article },
  data() {
    return {
      articles: [
        {
          title: "Patriotsvv make cuts ... and Tim Tebow survives (so far)",
          author: "Matej Sudar",
          commentsNumber: "12",
          contentText:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. ",
        },
        {
          title: "Patriotsvv make cuts ... and Tim Tebow survives (so far)",
          author: "Matej Sudar",
          commentsNumber: "12",
          contentText:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. ",
        },
        {
          title: "Patriotsvv make cuts ... and Tim Tebow survives (so far)",
          author: "Matej Sudar",
          commentsNumber: "12",
          contentText:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. ",
        },
        {
          title: "Patriotsvv make cuts ... and Tim Tebow survives (so far)",
          author: "Matej Sudar",
          commentsNumber: "12",
          contentText:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. ",
        },
        {
          title: "Patriotsvv make cuts ... and Tim Tebow survives (so far)",
          author: "Matej Sudar",
          commentsNumber: "12",
          contentText:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. ",
        },
        {
          title: "Patriotsvv make cuts ... and Tim Tebow survives (so far)",
          author: "Matej Sudar",
          commentsNumber: "12",
          contentText:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. ",
        },
        {
          title: "Patriotsvv make cuts ... and Tim Tebow survives (so far)",
          author: "Matej Sudar",
          commentsNumber: "12",
          contentText:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. ",
        },
        {
          title: "Patriotsvv make cuts ... and Tim Tebow survives (so far)",
          author: "Matej Sudar",
          commentsNumber: "12",
          contentText:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. ",
        },
      ],
    };
  },
};
</script>
