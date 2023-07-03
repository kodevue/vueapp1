<script setup>
import { defineAsyncComponent, provide } from 'vue'
import HelloSuspense from './components/HelloSuspense.vue'
import SimpleInjectComp from './components/SimpleInjectComp.vue'

const MyAsyncComp = defineAsyncComponent(() => import('./components/HelloAsyncComp.vue'))

provide('message', 'hello!')
</script>


<template>
  <h1 class="bg-dark text-light p-3">Hello Bootstrap</h1>
  <SimpleInjectComp />
  <MyAsyncComp />
  <MyAsyncComp>Slot Comp with Async Comp</MyAsyncComp>
  <HelloSuspense />
</template>

<style scoped>
</style>
