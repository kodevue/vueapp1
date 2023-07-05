<script setup>
import CommonComp from './CommonComp.vue'
import { useCounterStore } from '../stores/couter.js'
import { useProductStore } from '../stores/product.js'
import { storeToRefs } from 'pinia'

let counterStore = useCounterStore()
let productStore = useProductStore()

let { count, doubleCount } = storeToRefs(counterStore)
let { product } = storeToRefs(productStore)
</script>

<template>
  <CommonComp />
  <h1>Home {{ count }} / {{ doubleCount }}</h1>
  <h1>{{ product }}</h1>
</template>