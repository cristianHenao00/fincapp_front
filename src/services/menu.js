import axios from 'axios';
import { apiUrl } from '../constants/config';
import { getCurrentUser } from '../helpers/Utils';

const currentUser = getCurrentUser();

const headers = {
  Authorization: `Bearer ${currentUser.token}`,
};

export const getMenus = () => axios.get(`${apiUrl}/menus`, { headers });

export const deleteMenu = (props) => {
  const { id } = props;
  return axios.delete(`${apiUrl}/menus/${id}`, { headers });
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

export default getMenus;
