import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // state
  let count = ref(100)
  let title = ref('Project Book')

  // computed state
  let doubleCount = computed(() => count.value * 2)

  // Actions
  let increment = (val = 1) => {
    count.value += val
  }

  let asyncIncrement = async (val = 1) => {
    setTimeout(() => {
      count.value += val
    }, 1000)
  }

  return { count, title, doubleCount, increment, asyncIncrement }
})
