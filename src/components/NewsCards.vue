<template>
  <div class="col-4 mb-3">
    <div class="card h-100">
      <img :src="article.urlToImage" alt="..." class="card-img-top">
      <div class="card-body py-1 pb">
        <router-link :to="{name:'detailedNews',params:{title: article.title}}">{{ article.title }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCards",
  props: {
    article: {
      type: Object,
    },
  }
}
</script>

<style scoped>
img {
  height: 300px;
  width: auto;
  object-fit: cover;
  object-position: center;
}

a {
  text-decoration: none;
}
</style>