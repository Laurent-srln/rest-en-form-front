import axios from 'axios';

import { SET_INPUT_DATE_BOOKING_COACHING_VALUE, saveAvailableCoachings } from 'src/actions/coachings';

const baseUrl = 'https://app-osport.herokuapp.com';

const bookingCoaching = (store) => (next) => (action) => {
  switch (action.type) {
    case SET_INPUT_DATE_BOOKING_COACHING_VALUE: {
      const getAvaiblableCoachingsFromApi = async () => {
        try {
          const { token } = store.getState().auth.login;
          const { date, dateName } = store.getState().bookingCoaching;
          console.log('date', date);
          console.log('name', dateName);
          console.log('action.date', action.date);
          console.log('action.dateName', action.dateName);

          const response = await axios.get(`${baseUrl}/available-coachings?${action.dateName}=${action.date}`, {
            headers: {
              'content-type': 'application/json',
              Authorization: `bearer ${token}`,
            },
          });
          store.dispatch(saveAvailableCoachings(response.data));
        }
        catch (error) {
          console.log(error.response);
        }
      };
      getAvaiblableCoachingsFromApi();
      break;
    }
    default:
      next(action);
  }
};

export default bookingCoaching;
