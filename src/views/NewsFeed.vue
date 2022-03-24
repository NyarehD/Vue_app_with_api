<template>
  <div class="container">
    <div v-if="storedArticles.length<=0" class="row justify-content-center">
      LOL Loading
    </div>
    <div v-else class="row justify-content-center">
      <news-card v-for="article in storedArticles" :key="article.url" :article="article"></news-card>
    </div>
  </div>
</template>

<script>
import NewsCard from "@/components/NewsCards.vue"

export default {
  name: "FeedList",
  components: {NewsCard},
  data() {
    return {}
  },
  mounted() {
    this.$store.state.articles.length === 0 && this.$store.dispatch("getPost")
  },
  computed: {
    storedArticles() {
      return this.$store.state.articles;
    }
  }
}
</script>

<style lang="scss" scoped>
.sudo-su {
  color: red;

  .auau {
    color: red;
  }

}
</style>