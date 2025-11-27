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

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(!!localStorage.getItem('adminToken'))

  const login = async (password) => {
    try {
      const res = await api.post('/auth/login', { password })
      localStorage.setItem('adminToken', res.data.token)
      isLoggedIn.value = true
      return true
    } catch (err) {
      console.error('Login falhou:', err.response?.data || err)
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem('adminToken')
    isLoggedIn.value = false
  }

  return { isLoggedIn, login, logout }
})