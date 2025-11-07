import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SobrePage from '../views/SobrePage.vue'
import ContactoPage from '../views/ContactoPage.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/sobre', name: 'SobrePage', component: SobrePage },
  { path: '/contacto', name: 'ContactoPage', component: ContactoPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
