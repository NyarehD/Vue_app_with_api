<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
    <div class="container justify-content-between">
      <router-link :to="{ name: 'home' }" class="navbar-brand">
        <img alt="logo" class="logo" src="@/assets/logo.png"/>
        News
      </router-link>
      <button
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
          data-bs-target="#navbarSupportedContent"
          data-bs-toggle="collapse"
          type="button"
          @click="navbarStatus=true;navBarCollapsing=true"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
          id="navbarSupportedContent"
          :class="['navbar-collapse', 'justify-content-end', { 'show': navbarStatus ,'collapsing':navBarCollapsing,'collapse':navbarCollapse}]"
      >
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :class="['nav-link',{'active':this.$route.name==='home'}]" :to="{ name: 'home' }"
                         @click="toggleNavbarStatus('home')">Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :class="['nav-link',{'active':this.$route.name==='about'}]" :to="{ name: 'about' }"
                         @click="toggleNavbarStatus('about')">About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :class="['nav-link',{'active':this.$route.name==='news'}]" :to="{ name: 'news' }"
                         @click="toggleNavbarStatus('news')">News
            </router-link>
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
      navbarStatus: false,
      navBarCollapsing: false,
      navbarCollapse: true
    }
  },
  methods: {
    toggleNavbarStatus(to) {
      this.navbarCollapse = false;
      this.navBarCollapsing = true;
      setTimeout(() => {
        this.navBarCollapsing = false
      }, 350)
      this.navbarCollapse = true
      this.navbarStatus = false;
      router.push({name: to})
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
