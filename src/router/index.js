import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotesHomeView from '@/views/notes/HomeView.vue'
import AuthenticateView from "@/views/AuthenticateView.vue";
import {useAuthStore} from "@/stores/authentication.js";

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

router.beforeEach(async (to) => {
  const publicPages = ['/authenticate'];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();

  if (authRequired && !authStore.user) {
    return '/authenticate';
  }
  if (authStore.user && to.path === '/authenticate') {
    return '/'
  }
});

export default router
