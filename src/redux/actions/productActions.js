import productServices from '@/api/services/productServices'
import * as types from '../constants/productConstants'

export const getProducts = (page) => async (dispatch) => {
  try {
    const data = await productServices.getProducts(page)

    dispatch({
      type: types.GET_PRODUCTS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: types.GET_PRODUCTS_FAIL,
      payload: error
    })
  }
}

export const getProduct = (id) => async (dispatch) => {
  try {
    const data = await productServices.getProductDetail(id)

    dispatch({
      type: types.GET_PRODUCT_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: types.GET_PRODUCT_FAIL,
      payload: error
    })
  }
}

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const data = await productServices.deleteProduct(id)

    dispatch({
      type: types.DELETE_PRODUCT_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: types.DELETE_PRODUCT_FAIL,
      payload: error
    })
  }
}

export const changeKeyword = (value) => {
  return {
    type: types.CHANGE_KEYWORD,
    payload: value
  }
}
