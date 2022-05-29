import axios from 'axios';

export const fetchAllCategory = () => {
  return (dispatch) => {
    axios
      .get(
        'https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories'
      )
      .then(({ data }) => {
        dispatch(setCategory(data.data));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const setCategory = (payload) => {
  return {
    type: 'SET_CATEGORY',
    payload,
  };
};
