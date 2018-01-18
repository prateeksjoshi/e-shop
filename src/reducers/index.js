import {combineReducers} from 'redux';
/*
  All reducers
*/
import {products, productsIsLoading, productsHasError} from './products';
//import carts from './cart';

const rootReducer = combineReducers({
  productsHasError,
  productsIsLoading,
  products
})

export default rootReducer;
