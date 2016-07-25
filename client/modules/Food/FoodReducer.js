import { Map } from 'immutable';

const initialState = new Map();

const FoodReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


export default FoodReducer;
