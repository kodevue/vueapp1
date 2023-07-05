<script setup>
import CommonComp from './CommonComp.vue'
import { useCounterStore } from '../stores/couter.js'
import { storeToRefs } from 'pinia'

let counterStore = useCounterStore()
let { count, doubleCount } = storeToRefs(counterStore)
</script>

<template>
  <CommonComp />
  <h1>Home {{ count }} / {{ doubleCount }}</h1>
</template>../stores/couter.js