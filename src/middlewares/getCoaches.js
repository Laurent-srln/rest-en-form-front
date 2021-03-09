import axios from 'axios';

import {
  GET_ALL_COACHS,
  saveCoachs,
} from 'src/actions/Coachs';

const URL = 'https://app-osport.herokuapp.com';

const coachs = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ALL_COACHS: {
      console.log('middleware');
      const getAllCoaches = async () => {
        try {
          const response = await axios.get(`${URL}/coachs`);
          console.log(response.data);
          const actionToDispatch = saveCoachs(response.data);
          store.dispatch(actionToDispatch);
        }
        catch (error) {
          console.log(error);
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
