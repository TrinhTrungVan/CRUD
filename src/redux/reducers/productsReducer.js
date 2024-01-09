/* eslint-disable no-case-declarations */
/* eslint-disable indent */

import * as types from '../constants/productConstants'

const initialState = {
  product: null,
  products: [],
  totalProducts: 0,
  totalPages: 0,
  productError: null,
  keyword: ''
}

const productsReducers = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.GET_PRODUCTS_SUCCESS:
      const { products, total, limit } = payload
      return {
        ...state,
        products: products,
        totalProducts: total,
        totalPages: Math.ceil(state.totalProducts / limit),
        productError: null
      }
    case types.GET_PRODUCTS_FAIL:
      return {
        ...state,
        products: [],
        totalProducts: 0,
        totalPages: 0,
        productError: payload
      }
    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: payload,
        productError: null
      }
    case types.GET_PRODUCT_FAIL:
      return {
        ...state,
        product: null,
        productError: payload
      }
    case types.DELETE_PRODUCT_SUCCESS:
      const { id: productId } = payload
      const newArr = state.products.filter((item) => item.id !== productId)

      return {
        ...state,
        products: newArr,
        productError: null
      }
    case types.DELETE_PRODUCT_FAIL:
      return {
        ...state,
        productError: payload
      }
    case types.CHANGE_KEYWORD:
      return {
        ...state,
        keyword: payload
      }
    default:
      return state
  }
}

export default productsReducers
