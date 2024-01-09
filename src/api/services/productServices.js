import axiosClient from '../axiosClient'

const productServices = {
  getProducts: (page) => {
    return axiosClient.get(`/products?limit=10&skip=${(page - 1) * 10}`)
  },
  getProductDetail: (id) => {
    return axiosClient.get(`/products/${id}`)
  },
  createProduct: (data) => {
    return axiosClient.post('/products/add', data)
  },
  updateProduct: (id, newData) => {
    return axiosClient.put(`/products/${id}`, newData)
  },
  deleteProduct: (id) => {
    return axiosClient.delete(`/products/${id}`)
  }
}

export default productServices
