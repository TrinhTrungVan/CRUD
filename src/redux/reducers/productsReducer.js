/* eslint-disable no-case-declarations */
/* eslint-disable indent */

import * as types from '../constants/productConstants'

const initialState = {
  product: null,
  products: [],
  productError: null,
  keyword: ''
}

const productsReducers = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
        productError: null
      }
    case types.GET_PRODUCTS_FAIL:
      return {
        ...state,
        products: [],
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
    case types.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        product: null,
        products: [payload, ...state.products],
        productError: null
      }
    case types.CREATE_PRODUCT_FAIL:
      return {
        ...state,
        productError: payload
      }
    case types.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === payload.id ? payload : item
        ),
        productError: null
      }
    case types.UPDATE_PRODUCT_FAIL:
      return {
        ...state,
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
    case types.CLEAR_PRODUCT_FORM:
      return {
        ...state,
        product: null
      }
    default:
      return state
  }
}

export default productsReducers
