import { Button, Form, Input } from 'antd'
import { useState } from 'react'

const ProductForm = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {}

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
          Create
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ProductForm
