import axios from 'axios';

import { API_URL } from './constants';
//import { request } from '../../lib/http';
import { getUserAdapter } from './adapter/user/userAdapter';

export async function getUser() {
  return await axios.get(`${API_URL}/user`, null)
    .then((response) => {
      const data = getUserAdapter(response);
      return data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};


export async function createUser(data) {
  const params = {
    "email": data.email,
    "password": data.password
  };
  return await axios.patch(`${API_URL}/user`, params)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};

export async function removeUser(email) {
  const params = {
    data: {
      email
    }
  };
  return await axios.delete(`${API_URL}/user`, params)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};
