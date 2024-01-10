import axiosClient from '../axiosClient'

const productServices = {
  getProducts: () => {
    return axiosClient.get('/products')
  },
  getProductDetail: (id) => {
    return axiosClient.get(`/products/${id}`)
  },
  createProduct: (data) => {
    return axiosClient.post('/products', data)
  },
  updateProduct: (id, newData) => {
    return axiosClient.put(`/products/${id}`, newData)
  },
  deleteProduct: (id) => {
    return axiosClient.delete(`/products/${id}`)
  }
}

export default productServices
