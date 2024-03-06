import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: Home,
      component: Home
    }
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUpView
    }
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    }
  ]
})

export default router
