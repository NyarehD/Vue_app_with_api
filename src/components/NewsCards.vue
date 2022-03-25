<template>
  <div class="article col-lg-4 col-sm-6 mb-sm-3 mb-2" @click="goToDetailedNews">
    <div class="card h-100 shadow">
      <div class="parentDiv">
        <div
            class="childImage img-fluid h-100"
            :style="{ backgroundImage: `url(${article.urlToImage}` }"
        ></div>
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
      router.push({ name: 'detailedNews', params: { title: this.article.title } })
    }
  }
}
</script>

<style lang="scss" scoped>
div.article {
  .parentDiv {
    height: 18rem;
    overflow: hidden;

    .childImage {
      /*fallback color */
      background-image: url("../assets/logo.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transition: all 0.3s ease-in-out;
    }
  }
  a {
    text-decoration: none;
    text-align: left;
    color: rgb(0, 0, 0);
  }
  .card:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s;
    .parentDiv {
      .childImage {
        transform: scale(1.1);
      }
    }
    a {
      color: rgb(70, 70, 189);
    }
  }
}

@media only screen and (max-width: 576px) {
  div.article {
    .parentDiv {
      height: 13rem;
    }
  }
}
</style>