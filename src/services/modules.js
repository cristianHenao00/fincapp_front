import axios from 'axios';
import { apiUrl } from '../constants/config';
import { getCurrentUser } from '../helpers/Utils';

const currentUser = getCurrentUser();

const headers = {
  Authorization: `Bearer ${currentUser.token}`,
};

/** Tiene los modulos asignados al usuario */
const Modules = getCurrentUser().modules;

export const listarModulos = () => axios.get(`${apiUrl}/modulos`, { headers });

export const obtenerModulo = () => axios.get(`${apiUrl}/modulos`, { headers });

export const crearModulo = (props) => {
  const { body } = props;
  return axios.post(`${apiUrl}/modulos/crear`, body, { headers });
};

export const eliminarModulo = (props) => {
  const { id } = props;
  return axios.delete(`${apiUrl}/modulos/eliminar/${id}`, { headers });
};

export const actualizarModulo = (props) => {
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
