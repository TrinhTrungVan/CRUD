import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://dummyjson.com/'
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
