import axios from 'axios';

import { GET_WORKOUTS, saveWorkouts } from 'src/actions/workouts';

const baseUrl = 'https://app-osport.herokuapp.com/api-v1';

const getWorkouts = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_WORKOUTS: {
      const getWorkoutsFromApi = async () => {
        try {
          const { token } = store.getState().auth.login;
          const response = await axios.get(`${baseUrl}/workouts`, {
            headers: {
              'content-type': 'application/json',
              Authorization: `bearer ${token}`,
            },
          });
          console.log('response.data', response.data);
          store.dispatch(saveWorkouts(response.data));
        }
        catch (error) {
          console.log(error);
        }
      };
      getWorkoutsFromApi();
      break;
    }
    default:
      next(action);
  }
};

export default getWorkouts;
