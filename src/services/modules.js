import axios from 'axios';
import { apiUrl } from '../constants/config';
import { getCurrentUser } from '../helpers/Utils';

const currentUser = getCurrentUser();

const headers = {
  Authorization: `Bearer ${currentUser.token}`,
};

/** Tiene los modulos asignados al usuario */
const Modules = getCurrentUser().modules;

export const getModules = () => axios.get(`${apiUrl}/modules`, { headers });

export const getModule = (id) =>
  axios.get(`${apiUrl}/modules/${id}`, { headers });

export const createModule = (body) => {
  return axios.post(`${apiUrl}/modules`, body, { headers });
};

export const deleteModule = (props) => {
  const { id } = props;
  return axios.delete(`${apiUrl}/modules/${id}`, { headers });
};

export const updateModule = (props) => {
  const { id, body } = props;
  return axios.put(`${apiUrl}/modulos/actualizar/${id}`, body, { headers });
};
export const getMenus = (props) => {
  const { id } = props;
  return axios.get(`${apiUrl}/modules/menus/${id}`, { headers });
};
export const assignMenu = (props) => {
  const { body } = props;
  return axios.post(`${apiUrl}/modules/assign`, body, { headers });
};
export const unassignMenu = (props) => {
  const { body } = props;
  console.log(body);
  return axios.post(`${apiUrl}/modules/unassign`, body, {
    headers,
  });
};

export default Modules;
