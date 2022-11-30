import axios from 'axios';
import { apiUrl } from '../constants/config';
import { getCurrentUser } from '../helpers/Utils';

const baseUrl = apiUrl;
const currentUser = getCurrentUser();
const headers = { Authorization: `Bearer ${currentUser.token}` };

const listarDepartamentos = () =>
  axios.get(`${baseUrl}/departamentos`, { headers });

export const listarMunicipios = (id) =>
  axios.get(`${baseUrl}/ciudades/departamento/${id}`, { headers });

export default listarDepartamentos;
