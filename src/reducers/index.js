import {combineReducers} from 'redux';
/*
  All reducers
*/
import {products} from './products';

const rootReducer = combineReducers({
  products
})

export default rootReducer;
