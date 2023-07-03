<script setup>
let res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
let posts = await res.json()
</script>

<template>
  <h1>{{ posts }}</h1>
</template>