<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-6">
        {{ $route.params.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailedNews",
  data() {
    return {
      article: Object
    }
  },
  mounted() {
    this.store.dispatch("getPost")
    this.article = this.$store.state.articles;
  }
}
</script>

<style scoped>

</style>