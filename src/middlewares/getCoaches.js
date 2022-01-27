import axios from 'axios';

import {
  GET_ALL_COACHS,
  saveCoachs,
} from 'src/actions/Coachs';

import { baseUrl } from 'src/api';
// const baseUrl = 'https://app-osport.herokuapp.com/api-v1';

const coachs = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ALL_COACHS: {
      const getAllCoaches = async () => {
        const { token } = store.getState().auth.login;
        try {
          const response = await axios.get(`${baseUrl}/coachs`, {
            headers: {
              'content-type': 'application/json',
              Authorization: `bearer ${token}`,
            },
          });
          // console.log(response.data);
          const actionToDispatch = saveCoachs(response.data);
          store.dispatch(actionToDispatch);
        }
        catch (error) {
          // console.log(error.response);
        }
      };
      getAllCoaches();
      break;
    }
    default:
      next(action);
  }
};

export default coachs;
