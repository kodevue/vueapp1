<script setup>
import AppNavar from './components/AppNavar.vue'
import { provide } from 'vue'

provide('message', 'hello!')
</script>


<template>
  <AppNavar />
  <p>
    <router-link to="/">Go to Home | </router-link>
    <router-link to="/about">Go to About</router-link>
  </p>

  <router-view></router-view>
</template>

<style scoped>
</style>
