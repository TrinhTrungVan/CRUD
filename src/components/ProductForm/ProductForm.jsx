import { createProduct, updateProduct } from '@/redux/actions/productActions'
import { Button, Form, Input } from 'antd'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const ProductForm = () => {
  const [form] = Form.useForm()
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { product, productError } = useSelector((state) => state.products)
  const [loading, setLoading] = useState(false)
  const isEditing = !!product

  const handleSubmit = () => {
    setLoading(true)
    if (isEditing) {
      dispatch(updateProduct(id, form.getFieldsValue()))
    } else {
      dispatch(createProduct(form.getFieldsValue()))
    }
    if (productError) {
      toast.error('Something went wrong')
    } else {
      navigate('/confirm')
    }
    setLoading(false)
  }

  useEffect(() => {
    if (product) {
      form.setFieldsValue({
        title: product.title,
        price: product.price + '',
        description: product.description,
        category: product.category
      })
    }
  }, [product, form])

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true }, { type: 'string', min: 5 }]}
      >
        <Input disabled={loading} />
      </Form.Item>
      <Form.Item
        name="price"
        label="Price"
        rules={[{ required: true }, { type: 'string' }]}
      >
        <Input disabled={loading} />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true }, { type: 'string', min: 5 }]}
      >
        <Input disabled={loading} />
      </Form.Item>
      <Form.Item
        name="category"
        label="Category"
        rules={[{ required: true }, { type: 'string', min: 5 }]}
      >
        <Input disabled={loading} />
      </Form.Item>
      <Form.Item style={{ textAlign: 'end' }}>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          onClick={handleSubmit}
          disabled={loading}
        >
          {product ? 'Update' : 'Create'}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ProductForm
