import axios from 'axios';
import { apiUrl } from '../constants/config';
import { getCurrentUser } from '../helpers/Utils';

const currentUser = getCurrentUser();

const headers = {
  Authorization: `Bearer ${currentUser.token}`,
};

export const getPermissions = () =>
  axios.get(`${apiUrl}/permissions`, { headers });

export const getPermission = (id) =>
  axios.get(`${apiUrl}/permissions/${id}`, { headers });

export const createPermissions = (body) => {
  return axios.post(`${apiUrl}/permissions`, body, { headers });
};

export const deletePermissions = (props) => {
  const { id } = props;
  return axios.delete(`${apiUrl}/permissions/${id}`, { headers });
};

export const updatePermissions = (props) => {
  const { id, body } = props;
  return axios.put(`${apiUrl}/modulos/actualizar/${id}`, body, { headers });
};
