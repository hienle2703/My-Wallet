import { ACCESS_TOKEN } from '@/constants/keyStorage'
import { getItemSecureStorage } from '@/utils/secureStorage'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://mywallet-be.onrender.com/api/v1',
  timeout: 1000000,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(
  async (config) => {
    const token = await getItemSecureStorage(ACCESS_TOKEN)

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    console.log(error, 'ERROR INTERCEPTORS REQUEST API in api.ts line 21🐛')
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    console.log(response, 'RESPONSE API in api.ts line 28')
    return response
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      // TODO: handle unauthorized error
    }

    return Promise.reject(error)
  }
)

export default api
