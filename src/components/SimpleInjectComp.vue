<script setup>
import { inject } from 'vue'

let message = inject('message')
</script>

<template>
  <h1>Inject Component</h1>
  <h2>{{ message }}</h2>
</template>