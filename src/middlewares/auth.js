import axios from 'axios';

import { ADD_MAIL, saveMail } from 'src/actions/auth';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_MAIL: {
      console.log('state', store.getState().auth.email);
      const { email } = store.getState().auth;

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

export default auth;
