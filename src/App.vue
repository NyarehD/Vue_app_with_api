<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
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
        @click="navbarStatus=!navbarStatus"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        :class="['collapse', 'navbar-collapse', 'justify-content-end', { 'show': navbarStatus }]"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" :class="['nav-link',{'active':this.$route.name==='home'}]" @click="toggleNavbarStatus('home')">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'about' }" :class="['nav-link',{'active':this.$route.name==='about'}]" @click="toggleNavbarStatus('about')">About</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'news' }" :class="['nav-link',{'active':this.$route.name==='news'}]" @click="toggleNavbarStatus('news')">News</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view class="view"></router-view>
  <router-view name="detail"></router-view>
</template>
<script>
import router from "./router";
export default {
  name: "App",
  data() {
    return {
      navbarStatus: false
    }
  },
  methods: {
    toggleNavbarStatus(to) {
      this.navbarStatus = !this.navbarStatus;
      router.push({ name: to })
    }
  },
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
.view {
  margin-top: 75px;
}
</style>
