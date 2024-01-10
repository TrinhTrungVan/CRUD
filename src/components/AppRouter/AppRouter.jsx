import { Route, Routes } from 'react-router-dom'
import ProductManager from '@/pages/ProductManager/ProductManager'
import CreateProduct from '@/pages/CreateProduct/CreateProduct'
import EditProduct from '@/pages/EditProduct/EditProduct'
import './style.css'
import Confirm from '@/pages/Confirm/Confirm'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/" element={<ProductManager />} />
      </Routes>
    </div>
  )
}

export default AppRouter
