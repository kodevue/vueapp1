<script setup>
import { useCounterStore } from '../stores/couter.js'
import { storeToRefs } from 'pinia'

let counterStore = useCounterStore()
let { increment, asyncIncrement } = counterStore
let { count, doubleCount } = storeToRefs(counterStore)
</script>


<template>
  <h1>Common {{ count }} / {{ doubleCount }}</h1>
  <button @click="increment(1)">+</button>
  <button @click="asyncIncrement(2)">async +</button>
  <hr />
</template>