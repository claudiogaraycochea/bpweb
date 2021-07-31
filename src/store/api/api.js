import axios from 'axios';

import { API_URL } from './constants';
//import { request } from '../../lib/http';
import { getUserAdapter } from './adapter/user/userAdapter';

export const getUser = () => {
  const params = {};
  axios.get(`${API_URL}/user`, params)
    .then((response) => {
      console.log('response');
      const data = getUserAdapter(response);
      /* dispatch({
        type: 'ADD_PHASE',
        phase: response.data,
      });*/
    })
    .catch((error) => {
      console.log(error);
      /*dispatch({
        type: 'ADD_PHASE_ERROR',
        errorMessage: error,
      });*/
    });
};

