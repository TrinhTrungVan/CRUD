import ProductAction from '@/components/ProductAction/ProductAction'
import ProductTable from '@/components/ProductTable/ProductTable'
import './style.css'

const ProductManager = () => {
  return (
    <>
      <h3 className="title">Product Management</h3>
      <ProductAction />
      <ProductTable />
    </>
  )
}

export default ProductManager
