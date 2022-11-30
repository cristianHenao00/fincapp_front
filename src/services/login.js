import axios from 'axios';
import { apiUrl } from '../constants/config';

const login = (body) => {
  return axios.post(`${apiUrl}/login`, body);
};

export const getModulesMenus = (id, headers) =>
  axios.get(`${apiUrl}/roles/modules/menus/${id}`, { headers });

export default login;
