<template>
  <div class="container-md">
    <div v-if="storedArticles.length > 0" class="row justify-content-center">
      <news-card v-for="article in storedArticles" :key="article.url" :article="article"></news-card>
      <Waypoint class="col-lg-4 col-sm-6 mb-sm-3 mb-2 position-relative" @change="checkWaypoint">
        <div class="flipping-3 position-absolute" style="top: 50%;right:50%">
        </div>
      </Waypoint>
    </div>
    <div v-else class="position-absolute full-loading">
      <div class="flipping-3">
      </div>
    </div>
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
    getNews() {
      this.$store.dispatch("getPost", this.$store.state.articlePage)
      this.$store.commit("SET_ARTICLE_PAGE")
      console.log("Article page plus")
    },
    checkWaypoint(waypointState) {
      if (waypointState.going === "IN") {
        this.getNews()
      }
    }
  },
  mounted() {
    this.getNews();
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

.full-loading {
  top: 50%;
  right: 50%;
}
</style>