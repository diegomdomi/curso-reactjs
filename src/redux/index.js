	
import { createStore, combineReducers } from 'redux';
import  mensajes  from './reducers';
import isLoggin from './reducers/logginReducer'


const rootReducers = combineReducers({
  mensajes:mensajes,
  isLoggin:isLoggin
})

export const createAppStore = () => {

  let miStore = createStore( rootReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return miStore;
}
 
export default createAppStore;

