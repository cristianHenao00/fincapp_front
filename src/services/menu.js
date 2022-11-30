import axios from 'axios';
import { apiUrl } from '../constants/config';
import { getCurrentUser } from '../helpers/Utils';

const currentUser = getCurrentUser();

const headers = {
  Authorization: `Bearer ${currentUser.token}`,
};

const listarMenus = () => axios.get(`${apiUrl}/menus`, { headers });

export const eliminarMenu = (props) => {
  const { id } = props;
  return axios.delete(`${apiUrl}/menus/eliminar/${id}`, { headers });
};

export const actualizarMenu = (props) => {
  const { id, body } = props;
  return axios.put(`${apiUrl}/menus/actualizar/${id}`, body, { headers });
};
export const crearMenu = (props) => {
  const { body } = props;
  return axios.post(`${apiUrl}/menus/crear`, body, { headers });
};

export const buscarMenu = (props) => {
  const { id } = props;
  return axios.get(`${apiUrl}/menus/buscar/${id}`, { headers });
};

export default listarMenus;
