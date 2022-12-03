/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { apiUrl } from '../constants/config';
import { getCurrentUser } from '../helpers/Utils';

const currentUser = getCurrentUser();

const headers = {
  Authorization: `Bearer ${currentUser.token}`,
};

export const getRoles = () => axios.get(`${apiUrl}/roles`, { headers });
export const create = () => axios.post(`${apiUrl}/roles`, {}, { headers });
export const deleteRole = (id) =>
  axios.delete(`${apiUrl}/roles/${id}`, { headers });
