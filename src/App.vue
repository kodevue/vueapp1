<script setup>
import HelloAsync from './components/HelloAsync.vue'
</script>


<template>
  <h1>Hello</h1>
  <Suspense>
    <HelloAsync>This is Slot Content</HelloAsync>
  </Suspense>

  <Suspense>
    <HelloAsync />
  </Suspense>
</template>

<style scoped>
</style>
