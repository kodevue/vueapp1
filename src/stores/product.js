import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  let product = ref({ id: 1, name: 'nokia', price: 100.0 })

  return { product }
})
