<template>
  <div class="container">
    <div class="row justify-content-center">
      <news-card v-for="article in storedArticles" :key="article.url" :article="article"></news-card>
    </div>
  </div>
</template>

<script>
import NewsCard from "@/components/NewsCard";
// TODO nest the router-view inside this component instead of separate route
export default {
  name: "FeedList",
  components: {NewsCard},
  data() {
    return {}
  },
  mounted() {
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