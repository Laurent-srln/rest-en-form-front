import axios from 'axios';

import { GET_NEXT_BOOKINGS, saveNextBookings } from 'src/actions/nextBookings';

const baseUrl = 'https://app-osport.herokuapp.com';
const getNextBookings = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_NEXT_BOOKINGS: {
      const getNextBookingsFromApi = async () => {
        try {
          const { token } = store.getState().auth.login;

          const response = await axios.get(`${baseUrl}/coach-next-bookings`, {
            headers: {
              'content-type': 'application/json',
              Authorization: `bearer ${token}`,
            },
          });
          console.log('response.data', response.data);
          store.dispatch(saveNextBookings(response.data));
        }
        catch (error) {
          console.log(error);
        }
      };
      getNextBookingsFromApi();
      break;
    }
    default:
      next(action);
  }
};

export default getNextBookings;
