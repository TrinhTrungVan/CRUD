import { Route, Routes } from 'react-router-dom'
import ProductManager from '../../pages/ProductManager'
import CreateProduct from '@/pages/CreateProduct'
import EditProduct from '@/pages/EditProduct'
import './style.css'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/" element={<ProductManager />} />
      </Routes>
    </div>
  )
}

export default AppRouter
