<script setup>
let res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
let posts = await res.json()
</script>

<template>
  <hr />
  <slot>Fallback</slot>
  <h1>{{ posts }}</h1>

  <slot name="desc-slot"></slot>
  <slot name="title-slot"></slot>
</template>