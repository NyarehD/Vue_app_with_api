<template>
  <div class="container">
    <div class="row justify-content-center">
      <news-card v-for="article in storedArticles.articles" :key="article.url" :article="article"></news-card>
    </div>
  </div>
</template>

<script>
import NewsCard from "@/components/NewsCard";

export default {
  name: "FeedList",
  components: {NewsCard},
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch("getPost");
  },
  computed: {
    storedArticles() {
      return this.$store.state.articles;
    }
  }
}
</script>

<style scoped>

</style>