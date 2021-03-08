import axios from 'axios';

import { ADD_MAIL, saveMail } from 'src/actions';

const baseUrl = 'https://app-osport.herokuapp.com';


const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_MAIL: {
      const addUserMail = async () => {
        try {
          const { email } = store.getState().auth;
          console.log('email', email);

          const data = JSON.stringify({
            email,
          });
          console.log('data', data);

          const response = await axios.post(`${baseUrl}/login-email`, data, {
            headers: {
              'content-type': 'application/json',
            },
          });
          console.log('response', response);
          console.log('response.data.email', response.data.email);
          store.dispatch(saveMail(response.data.email));
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


/*
const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_MAIL: {
      console.log('state', store.getState().auth.email);
      const {
        email
      } = store.getState().auth;

      const params = JSON.stringify({
        email,
      });

      console.log('email', email);
      console.log('params', params);

      axios.post('https://app-osport.herokuapp.com/login-email', params, {
        headers: {
          'content-type': 'application/json',
        },
      }).then((response) => {
        console.log('response', response);
        store.dispatch(saveMail(response.data));
      }).catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};
*/

export default auth;
