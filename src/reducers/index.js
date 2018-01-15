import {combineReducers} from 'redux';
/*
  All reducers
*/
import {products} from './products';
//import carts from './cart';

const rootReducer = combineReducers({
  products
})

export default rootReducer;
