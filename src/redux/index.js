	
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import  mensajes  from './reducers';
// import isLoggin from './reducers/logginReducer'
// import userLogged  from './reducers/userLoggedReducer'
import products  from './reducers/productsReducer'


const rootReducers = combineReducers({
  // mensajes:mensajes,
  // isLoggin:isLoggin,
  // userLogged :userLogged,
  products:products
})

export const createAppStore = () => {

  let miStore = createStore( rootReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return miStore;
}
 
export default createAppStore;

