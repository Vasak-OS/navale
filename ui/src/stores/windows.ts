import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const windowsStore = defineStore('windows', () => {
  const winData = ref([])
  const windows = computed(() => winData.value)
  function update(windowsData:any) {
    winData.value = JSON.parse(windowsData)
  }

  return { winData, windows, update }
})
