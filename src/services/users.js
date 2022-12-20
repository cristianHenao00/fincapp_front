import axios from 'axios';
import { apiUrl } from 'constants/config';
import { getCurrentUser } from 'helpers/Utils';

const baseUrl = apiUrl;

const currentUser = getCurrentUser();

const headers = {
  Authorization: `Bearer ${currentUser.token}`,
};

const getUsers = () => axios.get(`${baseUrl}/users`, { headers });

export const obtenerUsuario = (id) =>
  axios.get(`${baseUrl}/usuarios/${id}`, { headers });

export const crearUsuario = (body) =>
  axios.post(`${baseUrl}/usuarios`, body, { headers });

export const actualizarUsuario = (id, body) =>
  axios.put(`${baseUrl}/usuarios/${id}`, body, { headers });

export const eliminarUsuario = (id) =>
  axios.delete(`${baseUrl}/usuarios/${id}`, { headers });

export { getUsers };
