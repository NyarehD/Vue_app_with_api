<template>
  <div class="container-md">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/news">News</router-link>
            </li>
            <li aria-current="page" class="breadcrumb-item active">{{ this.$route.params.title }}</li>
          </ol>
        </nav>
        <h2 class="text-start fw-bold">{{ currentArticle.title }}</h2>
        <p>Source : {{ currentArticle.source.name }}</p>
        <p>By {{ currentArticle.author }} at {{ currentArticle.publishedAt }}</p>
      </div>

      <img :src="currentArticle.urlToImage" alt="" class="w-100">
      <div class="col-md-8">
        <p class="text-start">{{ currentArticle.content }}<a :href="currentArticle.url" target="_blank">Read more</a>
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