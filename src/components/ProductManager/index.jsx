import productServices from '@/api/services/productServices'
import { Form } from 'antd'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import ProductAction from '../ProductAction'
import ProductModal from '../ProductModal'
import ProductTable from '../ProductTable'
import './style.css'

const ProductManager = () => {
  const [form] = Form.useForm()
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleAdd = () => {
    setEditingId(null)
    form.resetFields()
    showModal()
  }

  const handleEdit = (data) => {
    setEditingId(data.id)
    form.setFieldsValue(data)
    showModal()
  }

  const handleOk = async () => {
    setLoading(true)

    try {
      if (editingId) {
        const updatedProduct = await productServices.updateProduct(
          editingId,
          form.getFieldsValue()
        )
        const newArr = products.map((item) => {
          if (item.id === updatedProduct.id) {
            return updatedProduct
          }
          return item
        })
        setProducts(newArr)
        toast.success('Update success')
      } else {
        const newProduct = await productServices.createProduct(
          form.getFieldsValue()
        )
        setProducts([...products, newProduct])
        toast.success('Create success')
      }
    } catch (e) {
      toast.error('Something went wrong')
    }

    setIsModalOpen(false)
    setLoading(false)
  }

  const handleDelete = async (id) => {
    setLoading(true)
    try {
      await productServices.deleteProduct(id)
      const newArr = products.filter((item) => item.id !== id)
      setProducts(newArr)
      toast.success('Delete success')
    } catch (e) {
      toast.error('Something went wrong')
    }
    setLoading(false)
  }

  useEffect(() => {
    try {
      const getData = async () => {
        const data = await productServices.getProducts()
        setProducts(data)
      }
      getData()
    } catch (e) {
      setProducts([])
    }
  }, [])

  return (
    <>
      <h3 className="title">Product Management</h3>
      <ProductAction
        keyword={keyword}
        setKeyword={setKeyword}
        handleAdd={handleAdd}
      />
      <ProductTable
        data={products.filter((item) => item.title.includes(keyword))}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        loading={loading}
      />
      <ProductModal
        form={form}
        editingId={editingId}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        loading={loading}
      />
    </>
  )
}

export default ProductManager
