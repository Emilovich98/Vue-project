<template>
  <div class="home">
    <post-list></post-list>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from "../components/PostList.vue";

export default {
  name: "Home",
  components: { PostList }
};
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 2vw;
  padding-right: 2vw;
}
</style>