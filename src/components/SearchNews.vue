<template>
  <div class="input-group mb-3">
    <input
      v-model="searchKeyword"
      aria-describedby="searchButton"
      aria-label="Search Keyword"
      class="form-control"
      placeholder="Search"
      type="text"
    />
    <button
      id="searchButton"
      class="btn btn-primary"
      @click.prevent="searchNews"
    >
      <img alt="search icon" src="../assets/search.svg" />
    </button>
  </div>
</template>
<script>
// TODO: Create view and route to show the search results
import router from "@/router";

export default {
  name: "SearchNews",
  data() {
    return {
      searchKeyword: "",
    };
  },
  methods: {
    searchNews() {
      router.push({
        name: "detailedNews",
        params: { title: this.searchKeyword },
      });
    },
  },
};
</script>

<style scoped></style>
