<template>
  <div class="create">
    <h1 class="heading">Create new post page</h1>
    <form class="create-container">
      <input
        class="description-input"
        type="text"
        v-model="post.description"
        placeholder="Type a description here"
        required
      />
      <input
        class="hide-button"
        type="file"
        ref="fileInput"
        accept="image/*"
        v-on:change="previewImage"
      />
      <button class="choose-image" type="button" v-on:click="triggerChooseImg">Choose Image</button>
      <div class="image-preview-container">
        <img :src="post.image" class="image-preview" />
      </div>
      <button class="create-button" type="button" v-on:click="createPost">Create poster</button>
    </form>
  </div>
</template>

<script>
import { postRef } from '../firebase-db'

export default {
  name: 'Create',
  data () {
    return {
      post: {
        description: '',
        image: null
      }
    }
  },
  methods: {
    triggerChooseImg () {
      this.$refs.fileInput.click()
    },
    previewImage () {
      const imageFile = this.$refs.fileInput.files[0]
      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        this.post.image = event.target.result
      }
      fileReader.readAsDataURL(imageFile)
    },
    createPost () {
      postRef.add(this.post)
      this.$router.push('/')
    }
  }
};
</script>

<style>
.heading {
  margin-top: 5vh;
  margin-bottom: 5vh;
}

.create-container {
  display: flex;
  flex-direction: column;
  max-width: 350px;
  margin: 0 auto;
}

.description-input {
  height: 35px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 1vh;
  border-radius: 5px;
  border-width: 1px;
  border-color: rgb(0, 124, 182);
}

.hide-button {
  display: none;
}

.choose-image {
  height: 35px;
  background-color: dodgerblue;
  border-style: solid;
  border-color: rgb(0, 124, 182);
  border-radius: 5px;
  border-width: 1px;
  font-weight: 600;
  color: white;
}

.image-preview-container {
  width: 350px;
  margin-top: 1vh;
}

.image-preview {
  width: 100%;
  border-radius: 5px;
}

.create-button {
  height: 35px;
  background-color: rgb(77, 195, 77);
  border-style: solid;
  border-color: rgb(14, 68, 0);
  border-radius: 5px;
  border-width: 1px;
  font-weight: 600;
  color: white;
}
</style>