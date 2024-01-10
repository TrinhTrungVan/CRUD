import ProductForm from '@/components/ProductForm/ProductForm'
import { getProduct } from '@/redux/actions/productActions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const EditProduct = () => {
  const { id: productId } = useParams()
  const dispatch = useDispatch()
  const { productError } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getProduct(productId))
  }, [dispatch, productId])

  if (productError) {
    return (
      <>
        <h3 className="title">Edit Product</h3>
        <h3 className="title">{productError}</h3>
      </>
    )
  }

  return (
    <>
      <h3 className="title">Edit Product</h3>
      <ProductForm />
    </>
  )
}

export default EditProduct
