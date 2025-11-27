import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import HomePage from '@/views/HomePage.vue'
import SobrePage from '@/views/SobrePage.vue'
import ContactoPage from '@/views/ContactoPage.vue'
import LegislacaoPage from '@/views/LegislacaoPage.vue'
import NoticiasPage from '@/views/NoticiasPage.vue'
import ConcursosPage from '@/views/ConcursosPage.vue'
import DenunciaPage from '@/views/DenunciaPage.vue'
import AdminPage from '@/views/AdminPage.vue'
import LoginAdmin from '@/views/admin/LoginAdmin.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/sobre', name: 'Sobre', component: SobrePage },
  { path: '/contacto', name: 'Contacto', component: ContactoPage },
  { path: '/legislacao', name: 'Legislacao', component: LegislacaoPage },
  { path: '/noticias', name: 'Noticias', component: NoticiasPage },
  { path: '/concursos', name: 'Concursos', component: ConcursosPage },
  { path: '/denuncia', name: 'Denuncia', component: DenunciaPage },
  { path: '/admin/login', name: 'LoginAdmin', component: LoginAdmin },
  { path: '/admin', name: 'Admin', component: AdminPage, meta: { requiresAuth: true } },
  {
  path: '/noticia/:id',
  name: 'noticia-detalhes',
  component: () => import('@/views/NoticiaDetalhes.vue')
}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    next('/admin/login')
  } else if (to.path === '/admin/login' && auth.isLoggedIn) {
    next('/admin')
  } else {
    next()
  }
})

export default router