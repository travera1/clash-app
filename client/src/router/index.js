import { createRouter, createWebHistory } from 'vue-router'
import Session from '../services/session'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp'
import DeckBuilder from '../views/DeckBuilder.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/deckbuilder',
    name: 'DeckBuilder',
    component: DeckBuilder,
    meta: { requiresLogin: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from, next) => {
  if(to.meta.requiresLogin && !Session.user){
    next('/login')
  }else{
    next();
  }
})

export default router
