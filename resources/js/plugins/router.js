import { createMemoryHistory, createRouter } from 'vue-router'

import LoginPage from '../pages/LoginPage.vue'
import HomeView from '../pages/HomeView.vue'
import AboutView from '../pages/AboutView.vue'



const routes = [
  { path: '/', component: LoginPage },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
