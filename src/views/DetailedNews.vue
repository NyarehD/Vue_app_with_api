<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-8">
        <h3>{{currentArticle.title}}</h3>
        <img :src="currentArticle.urlToImage" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailedNews",
  data() {
    return {}
  },
  mounted() {
    if (this.$store.state.articles) {
      this.$store.dispatch("getPost");
    }
  },
  computed: {
    currentArticle() {
      return this.$store.state.articles.filter(article => article.title === this.$route.params.title)[0];
    },
  }
}
</script>
<style scoped>

</style>