import { combineReducers } from 'redux';

import ListCategory from './getCategoryReducer';
import ListBooking from './getBookingReducer';

const rootReducer = combineReducers({
  ListCategory,
  ListBooking,
});

export default rootReducer;
