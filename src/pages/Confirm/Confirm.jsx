import { useSelector } from 'react-redux'
import './style.css'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const Confirm = () => {
  const navigate = useNavigate()
  const { product } = useSelector((state) => state.products)
  const isEdit = !!product

  return (
    <div style={{ textAlign: 'center' }}>
      <h3 className="title">{isEdit ? 'Update Success' : 'Create Success'}</h3>
      <Button type="primary" size="large" onClick={() => navigate('/')}>
        Back
      </Button>
    </div>
  )
}

export default Confirm
