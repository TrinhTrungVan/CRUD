import { useEffect, useState } from 'react'
import Container from './components/Container'
import productServices from './api/services/productServices'
import './App.css'
import { Button, Flex, Input, Space, Table } from 'antd'
import toast from 'react-hot-toast'
import { Search } from 'lucide-react'

function App() {
  const [keyword, setKeyword] = useState('')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price'
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
          <Button disabled={loading}>Edit</Button>
          <Button danger onClick={() => onDelete(record.id)} disabled={loading}>
            Delete
          </Button>
        </Space>
      )
    }
  ]

  const onDelete = async (id) => {
    setLoading(true)
    try {
      await productServices.deleteProduct(id)
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
        <Button type="primary" size="large">
          Add Product
        </Button>
      </Flex>

      <Table
        columns={columns}
        dataSource={products.filter((item) => item.title.includes(keyword))}
        rowKey="id"
      />
    </Container>
  )
}

export default App
