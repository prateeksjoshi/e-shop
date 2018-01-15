import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger'

const initialState = {
  products: []
}
const store = createStore(rootReducer, initialState, applyMiddleware(
    thunk,
    promise,
    createLogger()
  ));
//store.dispatch({type:"INC"})

export default store;
