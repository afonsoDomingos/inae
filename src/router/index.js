import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import SobrePage from '../views/SobrePage.vue'
import ContactoPage from '../views/ContactoPage.vue'
import LegislacaoPage from '../views/LegislacaoPage.vue'
import NoticiasPage from '../views/NoticiasPage.vue'
import ConcursosPage from '../views/ConcursosPage.vue'
import DenunciaPage from '../views/DenunciaPage.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/sobre', name: 'SobrePage', component: SobrePage },
  { path: '/contacto', name: 'ContactoPage', component: ContactoPage },
  { path: '/legislacao', name: 'LegislacaoPage', component: LegislacaoPage },
  { path: '/noticias', name: 'NoticiasPage', component: NoticiasPage },
  { path: '/concursos', name: 'ConcursosPage', component: ConcursosPage },
  { path: '/denuncia', name: 'DenunciaPage', component: DenunciaPage }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})