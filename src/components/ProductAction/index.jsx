import { Button, Flex, Input } from 'antd'
import { Search } from 'lucide-react'
import './style.css'

const ProductAction = ({ keyword, setKeyword, handleAdd }) => {
  return (
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
  )
}

export default ProductAction
