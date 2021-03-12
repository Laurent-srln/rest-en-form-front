import axios from 'axios';

import { ADD_WORKOUT, saveWorkout } from 'src/actions/workouts';

const baseUrl = 'https://app-osport.herokuapp.com';

const addWorkout = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_WORKOUT: {
      const sendWorkoutToApi = async () => {
        try {
          const {
            date,
            weight,
            muscleMass,
            fatMass,
            boneMass,
            bodyWater,
            content,
          } = store.getState().addWorkout;

          const { token } = store.getState().auth.login;

          const addWorkoutStringify = JSON.stringify({
            date,
            weight,
            muscleMass,
            fatMass,
            boneMass,
            bodyWater,
            content,
          });

          const response = await axios.post(`${baseUrl}/new-workout`, addWorkoutStringify, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `bearer ${token}`,
            },
          });
          // console.log('response.data', response.data);
          // stockage du token dans le localStorage (réutiliser dans le reducer)
          // localStorage.setItem('token', response.data.token);
          store.dispatch(saveWorkout(response.data));
        }
        catch (error) {
          console.log('error.response', error.response);
        }
      };
      sendWorkoutToApi();
      break;
    }
    default:
      next(action);
  }
};

export default addWorkout;
