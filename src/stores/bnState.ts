import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBNStateStore = defineStore('bnState', () => {
  const isPlay = ref(false)
  const isActorPage = ref(false)

  return { isPlay, isActorPage }
})
