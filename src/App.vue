<script setup>
import { provide } from 'vue'
import AppNavar from './components/AppNavar.vue'

provide('message', 'hello!')
</script>


<template>
  <AppNavar />
  <h1>Hello</h1>
</template>

<style scoped>
</style>
