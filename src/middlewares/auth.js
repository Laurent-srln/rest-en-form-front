import axios from 'axios';

import { ADD_MAIL, saveMail } from 'src/actions';

const baseUrl = 'https://app-osport.herokuapp.com';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_MAIL: {
      const addUserMail = async () => {
        try {
          const { email, password, role } = store.getState().auth.login;

          const stateStringify = JSON.stringify({
            email,
            password,
            role,
          });

          const response = await axios.post(`${baseUrl}/login-email`, stateStringify, {
            headers: {
              'content-type': 'application/json',
            },
          });
          console.log('response.data', response.data);
          store.dispatch(saveMail(response.data));
        }
        catch (error) {
          console.log(error);
        }
      };
      addUserMail();
      break;
    }
    default:
      next(action);
  }
};

export default auth;
