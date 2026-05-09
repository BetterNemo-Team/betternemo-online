import { defineStore } from 'pinia'
import { nextTick, ref } from 'vue'

export type PagesName = 'actor' | 'code' | 'jsonEditor'

export const usePagesStore = defineStore('pages', () => {
  const currentName = ref<PagesName>('actor')
  function changePage(name: PagesName) {
    nextTick(() => {
      currentName.value = name
    })
  }
  return { currentName, changePage }
})
