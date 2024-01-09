import { combineReducers } from 'redux'
import productsReducers from './productsReducer'

const rootReducer = combineReducers({
  products: productsReducers
})

export default rootReducer
