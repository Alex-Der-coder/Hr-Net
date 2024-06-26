// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import employeeReducer from './reducers/employeeReducer'; 

const rootReducer = combineReducers({
  employeeState: employeeReducer,
});

const store = createStore(rootReducer);

export default store;


