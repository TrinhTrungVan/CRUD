import { Button, Space, Table } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { deleteProduct, getProducts } from '@/redux/actions/productActions'
import { useNavigate } from 'react-router-dom'
import './style.css'

const ProductTable = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { products, keyword } = useSelector((state) => state.products)
  const [loading, setLoading] = useState(false)

  const handleDelete = (id) => {
    setLoading(true)
    dispatch(deleteProduct(id)).finally(() => {
      setLoading(false)
    })
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
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
          <Button
            onClick={() => navigate(`/edit/${record.id}`)}
            disabled={loading}
          >
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

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <Table
      columns={columns}
      dataSource={products.filter((item) => item.title.includes(keyword))}
      rowKey="id"
    />
  )
}

export default ProductTable
