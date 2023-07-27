<script setup>
import HelloAsync from '@/components/HelloAsync.vue'
</script>

<template>
  <h1>About</h1>
  <HelloAsync />

  <hello-async>
    <h1 class="bg-primary">This is Slot Content</h1>
    <template #desc-slot>
      <h1>I am SLOT for Description</h1>
    </template>
    <template #title-slot>
      <h1>I am SLOT for Description</h1>
    </template>
  </hello-async>
</template>