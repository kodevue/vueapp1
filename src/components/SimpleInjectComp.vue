<script setup>
import { inject } from 'vue'

const color = 'white'
const theme = { color: 'green', padding: '16px' }
let message = inject('message')
</script>

<template>
  <h1>Inject Component</h1>
  <h2>{{ message }}</h2>
</template>

<style scoped>
h1 {
  color: v-bind(color);
  background: v-bind('theme.color');
  padding: v-bind('theme.padding');
}
</style>