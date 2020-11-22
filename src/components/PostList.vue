<template>
  <div>
    <h1 class="heading">Posts</h1>
    <div class="grid-container">
      <article v-for="post in posts" :key="post.id">
        <img class="post-img" v-bind:src="post.image" />
        <h3>{{ post.description }}</h3>
        <div class="devide">
          <router-link :to="{ name: 'Update', params: { post: post } }" class="devided-button-1">
            <button class="devided-button-2">Update</button>
          </router-link>
          <div class="devided-button-1">
            <button v-on:click="deletePost(post.id)" class="devided-button-3">Delete</button>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  data() {
    return {
      posts: []
    };
  },
  firestore: {
    posts: postRef
  },
  methods: {
    deletePost(id) {
      postRef.doc(id).delete();
    }
  }
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2vw;
  row-gap: 2vw;
  width: 100%;
  margin-bottom: 10vh;
}

.grid-container img {
  width: 100%;
}

.devide {
  display: flex;
  margin-top: 2vh;
}

.devided-button-1 {
  width: 50%;
  height: 35px;
}

.devided-button-2 {
  width: 95%;
  height: 35px;
  background-color: rgb(77, 195, 77);
  border-style: solid;
  border-color: rgb(14, 68, 0);
  border-radius: 5px;
  border-width: 1px;
  font-weight: 600;
  color: white;
}

.devided-button-3 {
  width: 100%;
  height: 35px;
  background-color: rgb(216, 28, 28);
  border-style: solid;
  border-color: rgb(14, 68, 0);
  border-radius: 5px;
  border-width: 1px;
  font-weight: 600;
  color: white;
}
</style>