<script setup>
import { defineAsyncComponent, provide } from 'vue'
import HelloSuspense from './components/HelloSuspense.vue'
import SimpleInjectComp from './components/SimpleInjectComp.vue'

const MyAsyncComp = defineAsyncComponent(() => import('./components/HelloAsyncComp.vue'))

provide('message', 'hello!')
</script>


<template>
  <SimpleInjectComp />
  <MyAsyncComp />
  <MyAsyncComp>Slot Comp with Async Comp</MyAsyncComp>
  <HelloSuspense />
</template>

<style scoped>
</style>
