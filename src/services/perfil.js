import axios from 'axios';
import { apiUrl } from '../constants/config';
import { getCurrentUser } from '../helpers/Utils';

const baseUrl = apiUrl;
const currentUser = getCurrentUser();
const headers = { Authorization: `Bearer ${currentUser.token}` };

export const listarPerfil = () => axios.get(`${baseUrl}/perfiles`, { headers });
export const crearPerfil = (body) =>
  axios.post(`${baseUrl}/perfiles`, body, { headers });
export const actualizarPerfil = (id, body) =>
  axios.put(`${baseUrl}/perfiles/${id}`, body, { headers });
export const eliminarPerfil = (id) =>
  axios.delete(`${baseUrl}/perfiles/${id}`, { headers });
export const buscarPerfil = (id) =>
  axios.get(`${baseUrl}/perfiles/${id}`, { headers });
export const modulosPerfil = (id) =>
  axios.get(`${baseUrl}/mpp/getModules/perfil/${id}`, { headers });

export const agregarModuloPerfil = async (idp, idm) => {
  const body = {
    perfilId: idp,
    moduloId: idm,
  };
  try {
    const res = await axios.post(`${baseUrl}/mpp/crearmpp/`, body, { headers });
    return res;
  } finally {
    console.log('sucess peticion enviada');
  }
};
export const deleteModulePerfil = async (idp, idm) => {
  try {
    const res = await axios.delete(`${baseUrl}/mpp/eliminarmpp/${idp}-${idm}`, {
      headers,
    });
    console.log('enviando la peticion eliminar');
    return res;
  } finally {
    console.log('sucess peticion enviada');
  }
};
