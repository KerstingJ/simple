import { combineReducers } from 'redux';
import clientsReducer from './clientsReducer'

export default combineReducers({
  // This is where my reducers will go when i get there
  clients: clientsReducer
});
