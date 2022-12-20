import axios from 'axios';
import { apiUrl } from 'constants/config';

const baseUrl = apiUrl;

const listarDepartamentos = () => axios.get(`${baseUrl}/departamentos`);

export const listarMunicipios = (id) =>
  axios.get(`${baseUrl}/ciudades/departamento/${id}`);

export default listarDepartamentos;
