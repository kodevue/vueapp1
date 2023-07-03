<script setup>
import { onMounted, ref } from 'vue'

const count = ref(100)
let iref = ref({ total: 100 })
let dataRef = ref({})

onMounted(() => fetchDataAction())

let increment = () => {
  count.value++
}

let totalIncrementAction = (event) => {
  console.log(event)
  // iref.value.total++
  iref.value.total += 100
}

let fetchDataAction = async () => {
  let res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  let data = await res.json()
  console.log(data)

  dataRef.value = data
}
</script>


<template>
  <h1>Hello</h1>
  <h1>Count {{ count }} <input type="button" value="Increment" @click="increment" /></h1>
  <h1>Count {{ count }} <input type="button" value="Increment" @click="increment()" /></h1>
  <h1>Count {{ count }} <input type="button" value="Increment" v-on:click="increment" /></h1>
  <h1>Count {{ count }} <input type="button" value="Increment" v-on:click="increment()" /></h1>

  <h1>AJAX DATA <input type="button" value="GET DATA" @click="fetchDataAction" /></h1>
  <h1>{{ dataRef }}</h1>

  <h1>{{ iref }}</h1>

  <h1>
    Total :: {{ iref.total }}
    <input type="button" value="Total Increment" @click="totalIncrementAction" />
  </h1>
</template>

<style scoped>
</style>
