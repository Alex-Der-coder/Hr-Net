// src/redux/reducers/employeeReducer.js
import { ADD_EMPLOYEE } from '../actions/employeeActions';

const initialState = {
  data: [],
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default employeeReducer;
