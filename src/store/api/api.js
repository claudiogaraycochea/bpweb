import axios from 'axios';

import { API_URL } from './constants';
//import { request } from '../../lib/http';
import { getUsersAdapter, getUserAdapter } from './adapter/user/userAdapter';

export async function getUsers() {
  return await axios.get(`${API_URL}/user/list`, null)
    .then((response) => {
      const data = getUsersAdapter(response);
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

export async function updateUser(data) {
  const params = {
    email: data.email,
    password: data.password
  };

  return await axios.post(`${API_URL}/user`, params)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};

export async function getUser(email) {
  const params = {
    email
  };
  return await axios.put(`${API_URL}/user`, params)
    .then((response) => {
      return getUserAdapter(response);
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};
