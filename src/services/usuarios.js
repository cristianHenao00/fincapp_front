import axios from 'axios';
import { urlBase } from '../constants/config';
import { getCurrentUser } from '../helpers/Utils';

const baseUrl = urlBase;

const currentUser = getCurrentUser();

const headers = {
  Authorization: `Bearer ${currentUser.token}`,
};

const listarUsuarios = () => axios.get(`${baseUrl}/usuarios`, { headers });

export const obtenerUsuario = (id) =>
  axios.get(`${baseUrl}/usuarios/${id}`, { headers });

export const crearUsuario = (body) =>
  axios.post(`${baseUrl}/usuarios`, body, { headers });

export const actualizarUsuario = (id, body) =>
  axios.put(`${baseUrl}/usuarios/${id}`, body, { headers });

export const eliminarUsuario = (id) =>
  axios.delete(`${baseUrl}/usuarios/${id}`, { headers });

export default listarUsuarios;
