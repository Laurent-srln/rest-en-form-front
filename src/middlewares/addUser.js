import axios from 'axios';

import {
  SUBMIT_USER, GET_ALL_SPECIALITIES, saveUserForm, saveAllSpecialities,
} from 'src/actions/addUserForm';

const baseUrl = 'https://app-osport.herokuapp.com';

console.log('middleware add user');

const addUser = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_USER: {
      console.log('LA');
      const sendUserToApi = async () => {
        try {
          const {
            firstname,
            lastname,
            email,
            role,
            specialities,
          } = store.getState().addUser;

          const { token } = store.getState().auth.login;

          const addUserStringify = JSON.stringify({
            firstname,
            lastname,
            email,
            role,
            specialities,
          });

          const response = await axios.post(`${baseUrl}/new-user`, addUserStringify, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `bearer ${token}`,
            },
          });
          console.log('response.data', response.data);
          store.dispatch(saveUserForm(response.data));
        }
        catch (error) {
          console.log('error.response', error.response);
        }
      };
      sendUserToApi();
      break;
    }
    case GET_ALL_SPECIALITIES: {
      console.log('get all specialities middleware');
      const getAllSpecialitiesfromApi = async () => {
        try {
          const { token } = store.getState().auth.login;

          const response = await axios.get(`${baseUrl}/specialties`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `bearer ${token}`,
            },
          });
          console.log('response.data', response.data);
          store.dispatch(saveAllSpecialities(response.data));
        }
        catch (error) {
          console.log('error.response', error.response);
        }
      };
      getAllSpecialitiesfromApi();
      break;
    }
    default:
      next(action);
  }
};

export default addUser;
