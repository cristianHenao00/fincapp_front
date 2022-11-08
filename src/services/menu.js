import axios from 'axios';
import { urlBase } from '../constants/config';
import { getCurrentUser } from '../helpers/Utils';

const currentUser = getCurrentUser();

const headers = {
  Authorization: `Bearer ${currentUser.token}`,
};

const listarMenus = () => axios.get(`${urlBase}/menus`, { headers });

export const eliminarMenu = (props) => {
  const { id } = props;
  return axios.delete(`${urlBase}/menus/eliminar/${id}`, { headers });
};

export const actualizarMenu = (props) => {
  const { id, body } = props;
  return axios.put(`${urlBase}/menus/actualizar/${id}`, body, { headers });
};
export const crearMenu = (props) => {
  const { body } = props;
  return axios.post(`${urlBase}/menus/crear`, body, { headers });
};

export const buscarMenu = (props) => {
  const { id } = props;
  return axios.get(`${urlBase}/menus/buscar/${id}`, { headers });
};

export default listarMenus;
