<script setup>
import HelloAsync from '@/components/HelloAsync.vue'
</script>

<template>
  <h1>About</h1>
  <HelloAsync />

  <hello-async>
    <h1 class="bg-primary text-light">This is Slot Content</h1>
    <template v-slot:desc-slot>
      <button class="btn btn-primary">SLOT Description</button>
    </template>
    <template #title-slot>
      <button class="btn btn-secondary">SLOT Title</button>
    </template>
  </hello-async>
</template>