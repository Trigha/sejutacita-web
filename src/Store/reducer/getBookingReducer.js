const initialState = [];

const getBookingReducer = (state = initialState, action) => {
  if (action.type === 'SET_BOOKING') {
    if (Array.isArray(action.payload)) return action.payload;
  }

  return state;
};

export default getBookingReducer;
