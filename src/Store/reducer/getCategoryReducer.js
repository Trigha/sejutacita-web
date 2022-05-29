const initialState = [];

const getCategoryReducer = (state = initialState, action) => {
  if (action.type === 'SET_CATEGORY') {
    if (Array.isArray(action.payload)) return action.payload;
  }

  return state;
};

export default getCategoryReducer;
