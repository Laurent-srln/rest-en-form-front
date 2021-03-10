import axios from 'axios';

import { LOGIN, saveUser } from 'src/actions/auth';

const baseUrl = 'https://app-osport.herokuapp.com';
const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const sendLoginToApi = async () => {
        try {
          const { email, password, token } = store.getState().auth.login;

          const stateStringify = JSON.stringify({
            email,
            password,
            token,
          });

          const response = await axios.post(`${baseUrl}/login`, stateStringify, {
            headers: {
              'content-type': 'application/json',
              Authorization: `bearer ${token}`,
            },
          });
          console.log('response.data', response.data);
          store.dispatch(saveUser(response.data));
        }
        catch (error) {
          console.log(error);
        }
      };
      sendLoginToApi();
      break;
    }
    default:
      next(action);
  }
};

export default auth;
