import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://64b7972921b9aa6eb0788b9f.mockapi.io/'
})

axiosClient.interceptors.request.use(async (config) => config)
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data
    }
    return response
  },
  (error) => {
    throw error.response.data
  }
)

export default axiosClient
