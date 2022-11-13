import axios from 'axios';
import { urlBase } from '../constants/config';
import { getCurrentUser } from '../helpers/Utils';

const currentUser = getCurrentUser();

const headers = {
  Authorization: `Bearer ${currentUser.token}`,
};

/** Tiene los modulos asignados al usuario */
const Modulos = getCurrentUser().modulo;

export const listarModulos = () => axios.get(`${urlBase}/modulos`, { headers });

export const obtenerModulo = () => axios.get(`${urlBase}/modulos`, { headers });

export const crearModulo = (props) => {
  const { body } = props;
  return axios.post(`${urlBase}/modulos/crear`, body, { headers });
};

export const eliminarModulo = (props) => {
  const { id } = props;
  return axios.delete(`${urlBase}/modulos/eliminar/${id}`, { headers });
};

export const actualizarModulo = (props) => {
  const { id, body } = props;
  return axios.put(`${urlBase}/modulos/actualizar/${id}`, body, { headers });
};
export const listarMenusModulo = (props) => {
  const { id } = props;
  return axios.get(`${urlBase}/mpm/buscarMPM/${id}`, { headers });
};
export const asignarMenuModulo = (props) => {
  const { body } = props;
  return axios.post(`${urlBase}/mpm`, body, { headers });
};
export const eliminarMenuModulo = (props) => {
  const { moduloId, menuId } = props;
  return axios.delete(`${urlBase}/mpm/eliminar/${moduloId}/${menuId}`, {
    headers,
  });
};

export default Modulos;
