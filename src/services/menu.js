import axios from 'axios';
import { apiUrl } from 'constants/config';
import { getCurrentUser } from 'helpers/Utils';

const currentUser = getCurrentUser();

const headers = {
  Authorization: `Bearer ${currentUser.token}`,
};

export const getMenus = () => axios.get(`${apiUrl}/menus`, { headers });

export const deleteMenu = (props) => {
  const { id } = props;
  return axios.delete(`${apiUrl}/menus/${id}`, { headers });
};

export const updateMenu = (props) => {
  const { id, body } = props;
  return axios.put(`${apiUrl}/menus/${id}`, body, { headers });
};
export const createMenu = (body) => {
  return axios.post(`${apiUrl}/menus`, body, { headers });
};

export const getMenu = (id) => {
  return axios.get(`${apiUrl}/menus/${id}`, { headers });
};

export default getMenus;
