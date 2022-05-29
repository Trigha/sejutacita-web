import axios from 'axios';

export const fetchAllBooking = () => {
  return (dispatch) => {
    axios
      .get(
        'https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books'
      )
      .then(({ data }) => {
        dispatch(setBooking(data.data));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const setBooking = (payload) => {
  return {
    type: 'SET_BOOKINGS',
    payload,
  };
};
