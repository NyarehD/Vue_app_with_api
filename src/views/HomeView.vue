<template>
  <div class="container-md">
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="home">
          <img alt="Vue logo" class="my-auto" src="../assets/logo.png">
          <HelloWorld msg="Welcome to Your Vue.js App"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
