<script setup>
import { defineAsyncComponent } from 'vue'
import HelloSuspense from './HelloSuspense.vue'
import SimpleInjectComp from './SimpleInjectComp.vue'

const MyAsyncComp = defineAsyncComponent(() => import('./HelloAsyncComp.vue'))
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
