<script setup lang="ts">
import { ref, Ref } from 'vue'
import { Task } from '../types'
import PostService from '../PostService';

const posts: Ref<Task[]> = ref([])
posts.value = await PostService.getPosts()

const text = ref('')

const createPost = async () => {
  if (text.value) {
    await PostService.insertPost(text.value)
    posts.value = await PostService.getPosts()
    text.value = ''
  }
}

const deletePost = async (id: string) => {
  await PostService.deletePost(id)
  posts.value = await PostService.getPosts()
}

</script>

<template>
  <div class="container">
    <h1>Latest posts</h1>
    <div class="create-post">
      <label for="create-post">Create post</label>
      <input type="text" id="create-post" v-model="text">
      <button @click="createPost">Post</button>
    </div>
    <div class="posts-container">
      <div class="post" v-for="(post, idx) in posts" :key="post.id" @dblclick="deletePost(post.id)">
        <div class="post__text">{{post.title}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.create-post {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-bottom: .8rem;
  margin-bottom: 2rem;
}

.create-post input {
  font-size: 1.2rem;
  padding: .5rem 1rem;
  border: 1px solid salmon;
  border-radius: .5rem;
  outline: none;
}

.posts-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
}

.post {
  font-size: 1.5rem;
  background-color: salmon;
  padding: 2rem 4rem;
  min-width: 20rem;
  border-radius: 1rem;
  cursor: pointer;
}
</style>
