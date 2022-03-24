<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-lg fixed-top">
    <div class="container justify-content-between">
      <router-link :to="{ name: 'home' }" class="navbar-brand">
        <img src="@/assets/logo.png" alt="logo" class="logo" />
        News
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'news' }" class="nav-link">News</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view class="view"></router-view>
  <router-view name="detail"></router-view>
</template>
<script>
export default {
  name: "App",
  beforeMount() {
    this.$store.state.articles.length === 0 && this.$store.dispatch("getPost")
  }
}
</script>
<style lang="scss">
.navbar {
  .logo {
    height: 40px;
    width: auto;
  }
}
.view{
  margin-top: 75px;
}
</style>
