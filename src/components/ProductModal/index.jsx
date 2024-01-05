import { Form, Input, Modal } from 'antd'

const ProductModal = ({
  form,
  editingId,
  isModalOpen,
  handleOk,
  handleCancel,
  loading
}) => {
  return (
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
  )
}

export default ProductModal
