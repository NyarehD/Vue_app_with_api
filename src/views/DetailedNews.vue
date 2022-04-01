<template>
  <div class="container-md">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h2 class="text-start fw-bold">{{ currentArticle.title }}</h2>
        <p class="mb-0">Source : {{ currentArticle.source.name }}</p>
        <p>By {{ currentArticle.author }} at {{ currentArticle.publishedAt }}</p>
      </div>
      <div class="col-md-9">
        <img :src="currentArticle.urlToImage" alt class="w-100"/>
      </div>
      <div class="col-md-8">
        <p class="text-start">
          {{ currentArticle.content }}
          <a :href="currentArticle.url" target="_blank">Read more</a>
        </p>
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
  beforeMount() {
    if (this.$store.state.articles.length === 0) {
      this.$store.dispatch("getPost");
    }
    window.document.title = this.$route.params.title;
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