import axios from 'axios';
import { apiUrl } from '../constants/config';
import { getCurrentUser } from '../helpers/Utils';

const currentUser = getCurrentUser();

const headers = {
  Authorization: `Bearer ${currentUser.token}`,
};

export const getRoles = () => axios.get(`${apiUrl}/roles`, { headers });

export const getRole = (id) => axios.get(`${apiUrl}/roles/${id}`, { headers });

export const createRole = (body) =>
  axios.post(`${apiUrl}/roles`, body, { headers });

export const updateRole = (props) => {
  const { id, body } = props;
  axios.put(`${apiUrl}/roles/${id}`, body, { headers });
};

export const getRoleModules = (props) => {
  const { id } = props;
  return axios.get(`${apiUrl}/roles/modules/${id}`, { headers });
};

export const assignModule = (props) => {
  const { body } = props;
  return axios.post(`${apiUrl}/modules/assign`, body, { headers });
};
export const unassignModule = (props) => {
  const { body } = props;
  return axios.delete(`${apiUrl}/modules/assign`, body, {
    headers,
  });
};

export const deleteRole = (id) =>
  axios.delete(`${apiUrl}/roles/${id}`, { headers });
