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
export const listarMenusModulo = (props) => {
  const { id } = props;
  return axios.get(`${apiUrl}/mpm/buscarMPM/${id}`, { headers });
};
export const asignarMenuModulo = (props) => {
  const { body } = props;
  return axios.post(`${apiUrl}/mpm`, body, { headers });
};
export const eliminarMenuModulo = (props) => {
  const { moduloId, menuId } = props;
  return axios.delete(`${apiUrl}/mpm/eliminar/${moduloId}/${menuId}`, {
    headers,
  });
};

export default Modules;
