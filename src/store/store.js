import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';

const initialState = {
  products: []
}
const store = createStore(rootReducer, initialState, applyMiddleware(
    thunkMiddleware,
    promise
  ));
//store.dispatch({type:"INC"})

export default store;
