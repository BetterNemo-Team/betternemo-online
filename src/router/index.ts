import { createRouter, createWebHashHistory } from 'vue-router'
import EditorPage from '@/pages/EditorPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      'name': 'editor',
      'path': '/',
      'component': EditorPage
    }
  ],
})

export default router
