import { Map, List } from 'immutable';
import {
  ADD_INGESTION,
} from './FoodActions';

const initialState = new Map({
  ingestions: new List(),
});

const FoodReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGESTION:
      return state
        .update('ingestions',
          ingestion => ingestion.push(action.ingestion));
    default:
      return state;
  }
};


export default FoodReducer;
