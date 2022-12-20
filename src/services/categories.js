import axios from 'axios';
import { apiUrl } from 'constants/config';
import { getCurrentUser } from 'helpers/Utils';

const currentUser = getCurrentUser();

const headers = {
  Authorization: `Bearer ${currentUser.token}`,
};

export const getCategories = () =>
  axios.get(`${apiUrl}/categories`, { headers });

export const deleteCategory = (props) => {
  const { id } = props;
  return axios.delete(`${apiUrl}/categories/${id}`, { headers });
};

export const updateCategory = (props) => {
  const { id, body } = props;
  return axios.put(`${apiUrl}/categories/${id}`, body, { headers });
};
export const createCategory = (body) => {
  return axios.post(`${apiUrl}/categories`, body, { headers });
};

export const getCategory = (id) => {
  return axios.get(`${apiUrl}/categories/${id}`, { headers });
};

export default getCategories;
