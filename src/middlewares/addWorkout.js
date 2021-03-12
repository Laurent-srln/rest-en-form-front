import axios from 'axios';

import { ADD_WORKOUT, saveWorkout } from 'src/actions/workouts';

const baseUrl = 'https://app-osport.herokuapp.com';

const addWorkout = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_WORKOUT: {
      const sendWorkoutToApi = async () => {
        try {
          const { date, weigth } = store.getState().addWorkout;

          const userStringify = JSON.stringify({
            date,
            weigth,
          });

          const response = await axios.post(`${baseUrl}/login`, userStringify, {
            headers: {
              'content-type': 'application/json',
            },
          });
          // stockage du token dans le localStorage (réutiliser dans le reducer)
          localStorage.setItem('token', response.data.token);
          store.dispatch(saveWorkout(response.data));
        }
        catch (error) {
          console.log(error);
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
