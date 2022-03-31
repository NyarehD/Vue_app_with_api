<template>
  <div class="container-md">
    <div v-if="storedArticles.length>=0" class="row justify-content-center">
      <news-card v-for="article in storedArticles" :key="article.url" :article="article"></news-card>
    </div>
    <div class="row justify-content-center loading" @change="getNews">
      LOL LOADING
    </div>
    <Waypoint class="row justify-content-center loading" @change="getNews">
      LOL Loading
    </Waypoint>
  </div>
</template>

<script>
import NewsCard from "@/components/NewsCards.vue"
import {Waypoint} from "vue-waypoint"

export default {
  name: "FeedList",
  components: {NewsCard, Waypoint},
  data() {
    return {}
  },
  computed: {
    storedArticles() {
      return this.$store.state.articles;
    }
  },
  methods: {
    getNews(waypointState) {
      if (waypointState.going === "IN") {
        this.$store.dispatch("getPost", this.$store.state.articlePage)
        this.$store.commit("SET_ARTICLE_PAGE")
        console.log("Article page plus")
      }
    }
    // scroll() {
    //   window.onscroll = () => {
    //     console.log("scrolling")
    //     let scrollTo = document.querySelector(".loading")
    //     if (scrollTo && this.isScrolledIntoView(scrollTo)) {
    //       console.log("Run function")
    //     }
    //   }
    // },
    // isScrolledIntoView(el) {
    //   let rect = el.getBoundingClientRect()
    //   let elemTop = rect.top;
    //   let elemBot = rect.bottom;
    //   return elemTop < window.innerHeight && elemBot >= 0
    // }
  },
  mounted() {
    // this.scroll()
  },

}
</script>

<style lang="scss" scoped>
</style>