import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://inae-admin.onrender.com/api',
  timeout: 15000
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('adminToken')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export const useNewsStore = defineStore('news', () => {
  const news = ref([])
  const loading = ref(false)
  const saving = ref(false)

  const fetchNews = async () => {
    loading.value = true
    try {
      const res = await api.get('/news')
      news.value = res.data || []
    } catch (err) {
      console.error('Erro ao carregar notícias:', err)
    } finally {
      loading.value = false
    }
  }

  const addNews = async (item) => {
    saving.value = true
    try {
      const res = await api.post('/news', item)
      news.value.unshift(res.data)
      return res.data
    } catch (err) {
      console.error('Erro ao criar notícia:', err)
      throw err
    } finally {
      saving.value = false
    }
  }

  const updateNews = async (id, data) => {
    saving.value = true
    try {
      const res = await api.put(`/news/${id}`, data)
      const idx = news.value.findIndex(n => n._id === id || n.id === id)
      if (idx !== -1) {
        news.value[idx] = res.data
        news.value = [...news.value] // força reatividade
      }
      return res.data
    } catch (err) {
      console.error('Erro ao atualizar notícia:', err)
      throw err
    } finally {
      saving.value = false
    }
  }

  const deleteNews = async (id) => {
    try {
      await api.delete(`/news/${id}`)
      news.value = news.value.filter(n => (n._id || n.id) !== id)
    } catch (err) {
      console.error('Erro ao excluir notícia:', err)
      alert('Erro ao excluir. Tenta novamente.')
    }
  }

  // Carrega automaticamente
  fetchNews()

  return {
    news,
    loading,
    saving,
    fetchNews,
    addNews,
    updateNews,
    deleteNews
  }
})