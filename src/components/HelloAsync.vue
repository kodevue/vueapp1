<script setup>
import { onMounted, ref } from 'vue'

let posts = ref()

let fetchPosts = async () => {
  let res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  let results = await res.json()

  posts.value = results
}

onMounted(() => fetchPosts())
</script>

<template>
  <slot>Fallback</slot>
  <h1>{{ posts }}</h1>

  <slot name="desc-slot">FB</slot>
  <slot name="title-slot">FB</slot>
  <hr />
</template>