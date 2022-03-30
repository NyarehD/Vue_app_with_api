<template>
  <div class="container-md">
    <div v-if="storedArticles.length>=0" class="row justify-content-center">
      <news-card v-for="article in storedArticles" :key="article.url" :article="article"></news-card>
    </div>
    <div class="row justify-content-center loading">
      LOL LOADING
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
  computed: {
    storedArticles() {
      return this.$store.state.articles;
    }
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        let scrollTo = document.querySelector(".loading")
        if (scrollTo && this.isScrolledIntoView(scrollTo)) {
          console.log("Scrolling")
        }
      }
    },
    isScrolledIntoView(el) {
      let rect = el.getBoundingClientRect()
      let elemTop = rect.top;
      let elemBot = rect.bottom;
      return elemTop < window.innerHeight && elemBot >= 0
    }
  },
  mounted() {
    if (this.$store.state.articles.length === 0) {
      this.$store.dispatch("getPost", 1)
    }
    this.scroll()
    window.addEventListener("scroll", function () {
      console.log(this.scrollX)
    })
  },

}
</script>

<style lang="scss" scoped>
</style>