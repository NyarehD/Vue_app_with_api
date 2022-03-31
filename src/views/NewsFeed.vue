<template>
  <div class="container-md">
    <div v-if="storedArticles.length >= 0" class="row justify-content-center">
      <news-card v-for="article in storedArticles" :key="article.url" :article="article"></news-card>
    </div>
    <Waypoint class="row justify-content-center loading" @change="getNews">
      <div class="flipping-3">

      </div>
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
.flipping-3 {
  width: 40px;
  height: 40px;
  transform: perspective(150px) rotateX(0) rotateY(0);
  animation: f3-1 2s infinite linear,
  f3-2 3s infinite linear -.5s;
}

@keyframes f3-1 {
  50% {
    transform: perspective(150px) rotateX(180deg) rotateY(0)
  }
  100% {
    transform: perspective(150px) rotateX(180deg) rotateY(180deg)
  }
}

@keyframes f3-2 {
  0%, 33% {
    background: #337ab7
  }
  33.1%, 66% {
    background: #41B883
  }
  66.1%, 100% {
    background: #34495B
  }
}
</style>