import { useEffect, useState } from 'react'
import Container from './components/Container'
import productServices from './api/services/productServices'
import './App.css'
import { Button, Flex, Form, Input, Modal, Space, Table } from 'antd'
import toast from 'react-hot-toast'
import { Search } from 'lucide-react'

function App() {
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

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      defaultSortOrder: 'asending',
      sorter: (a, b) => a.price - b.price
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="large">
          <Button disabled={loading} onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button
            danger
            onClick={() => handleDelete(record.id)}
            disabled={loading}
          >
            Delete
          </Button>
        </Space>
      )
    }
  ]

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
    <Container>
      <h3 className="title">Product Management</h3>

      <Flex justify="space-between" style={{ margin: '32px 0' }}>
        <Input
          placeholder="Search..."
          size="large"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          addonAfter={<Search />}
          style={{ maxWidth: 500 }}
        />
        <Button type="primary" size="large" onClick={handleAdd}>
          Add Product
        </Button>
      </Flex>

      <Table
        columns={columns}
        dataSource={products.filter((item) => item.title.includes(keyword))}
        rowKey="id"
      />

      <Modal
        title={editingId ? 'Edit Product' : 'Add Product'}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={editingId ? 'Save' : 'Add'}
        confirmLoading={loading}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true }, { type: 'string', min: 5 }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true }, { type: 'string' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true }, { type: 'string', min: 5 }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true }, { type: 'string', min: 5 }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Container>
  )
}

export default App
