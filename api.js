import axios from 'axios'

const api = axios.create({
  baseURL: 'https://inae-admin.onrender.com/api',
  timeout: 15000
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('adminToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api