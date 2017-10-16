import { combineReducers } from 'redux';

const initialState = "";

function ContactInfo(state = initialState, action) {
if (action.type === 'Height') {
      const { Height } = action;
      return { ...state, Height };
  } else if (action.type === 'Weight') {
      const { Weight } = action;
      return { ...state, Weight };
  } else if (action.type === 'Bmi') {
      const { Bmi } = action;
      return { ...state, Bmi };
  }
  return state;
}

const rootReducer = combineReducers({
    ContactInfo
});

export default rootReducer;