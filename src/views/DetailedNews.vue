<template>
  <div class="container-lg">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h2 class="text-start fw-bold">{{ article.title }}</h2>
        <p class="mb-0">Source : {{ article.source.name }}</p>
        <p>By {{ article.author }} at {{ article.publishedAt }}</p>
      </div>
      <div class="col-md-9">
        <img :src="article.urlToImage" alt class="w-100"/>
      </div>
      <div class="col-md-8">
        <p class="text-start">
          {{ article.content }}
          <a :href="article.url" target="_blank">Read more</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DetailedNews",
  data() {
    return {
      articles: Object,
      article: Object
    }
  },
  beforeMount() {
    axios.get(`https://newsapi.org/v2/everything?q=${this.$route.params.title}&searchIn=title&apiKey=b04ad0967ac040f6af1753f437d4c3c8`)
        .then(response => {
          this.articles = response.data;
          this.article = response.data.articles[0]
        })
    window.document.title = this.$route.params.title;
  },
}
</script>

<style scoped>
</style>