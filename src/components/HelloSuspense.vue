<script setup>
import HelloAsync from './HelloAsync.vue'
</script>


<template>
  <h1>Hello</h1>
  <Suspense>
    <HelloAsync>This is Slot Content</HelloAsync>
  </Suspense>

  <Suspense>
    <HelloAsync />
  </Suspense>

  <Suspense>
    <HelloAsync>
      <h1>I am default Slot Content</h1>
      <template #desc-slot>
        <h1>I am SLOT for Description</h1>
      </template>
      <template #title-slot>
        <h1>I am SLOT for Title</h1>
      </template>
    </HelloAsync>
  </Suspense>
</template>

<style scoped>
</style>
