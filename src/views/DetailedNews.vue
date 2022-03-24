<template>
  <div class="container-md">
    <div class="row justify-content-center">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/news">News</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{this.$route.params.title}}</li>
        </ol>
      </nav>
      <div class="col-md-8">
        <h2 class="text-start fw-bold">{{currentArticle.title}}</h2>
        <img :src="currentArticle.urlToImage" alt="" class="w-100">
        <p class="text-start">{{currentArticle.content}}<a href="{{currentArticle.url}}">Read more</a></p>
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
    if (!this.$store.state.articles) {
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