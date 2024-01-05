import { Button, Space, Table } from 'antd'
import './style.css'

const ProductTable = ({ data, loading, handleEdit, handleDelete }) => {
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

  return <Table columns={columns} dataSource={data} rowKey="id" />
}

export default ProductTable
