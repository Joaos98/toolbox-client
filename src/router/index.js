import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotesHomeView from '@/views/notes/HomeView.vue'
import AuthenticateView from "@/views/AuthenticateView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, {
      path: '/authenticate',
      name: 'authenticate',
      component: AuthenticateView
    }, {
      path: '/notes',
      name: 'notes',
      component: NotesHomeView
    }
  ]
})

export default router
