import { Button, Flex, Input } from 'antd'
import { Search } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { changeKeyword } from '@/redux/actions/productActions'
import { useNavigate } from 'react-router-dom'
import './style.css'

const ProductAction = () => {
  const naviagate = useNavigate()
  const dispatch = useDispatch()
  const { keyword } = useSelector((state) => state.products)

  const handleChange = (e) => {
    dispatch(changeKeyword(e.target.value))
  }

  const handleAdd = () => {
    naviagate('/create')
  }

  return (
    <Flex justify="space-between" style={{ margin: '32px 0' }}>
      <Input
        placeholder="Search..."
        size="large"
        value={keyword}
        onChange={handleChange}
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
