<script setup>
import { provide } from 'vue'
import App1 from './components/App1.vue'

provide('message', 'hello!')
</script>


<template>
  <App1 />
</template>

<style scoped>
</style>
