<script setup>
import { computed, provide, ref } from 'vue'
import AppNavar from './components/AppNavar.vue'
import About from './pages/About.vue'
import Home from './pages/Home.vue'
import NotFound from './pages/NotFound.vue'

const routes = {
  '/': Home,
  '/about': About
}

provide('message', 'hello!')
const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  console.log(window.location)
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  console.log(currentPath.value.slice(1), currentPath.value)
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>


<template>
  <AppNavar />

  <a href="#/">Home</a> | <a href="#/about">About</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView" />
</template>

<style scoped>
</style>
