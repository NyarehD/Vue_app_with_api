<template>
  <div class="article col-lg-4 col-sm-6 mb-sm-3 mb-2" @click="goToDetailedNews">
    <div class="card h-100 shadow">
      <div class="card-img-container">
        <img :src="article.urlToImage?article.urlToImage:'../src/assets/logo.png'" class="card-img-top h-100">
      </div>
      <div class="card-body py-1 pb">
        <p>{{ article.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router"

export default {
  name: "NewsList",
  props: {
    article: {
      type: Object,
    },
  },
  methods: {
    goToDetailedNews() {
      router.push({name: 'detailedNews', params: {title: this.article.title}})
    },
  },
}
</script>

<style lang="scss">
div.article {
  .card {
    .card-img-container {
      height: 18rem;
      position: relative;

      .card-img-top {
        object-fit: cover;
      }
    }
  }

  .card:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s;
    overflow: hidden;

    .card-img-container {
      overflow: hidden;

      .card-img-top {
        transform: scale(1.1);
        transition: all 0.4s;
      }
    }

    p {
      color: rgb(70, 70, 189);
    }
  }
}
@media only screen and (max-width: 576px) {
  div.article {
    .card-img-top {
      height: 13rem;
    }
  }
}
</style>