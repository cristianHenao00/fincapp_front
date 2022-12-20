import axios from 'axios';
import { apiUrl } from 'constants/config';
import { getCurrentUser } from 'helpers/Utils';

const currentUser = getCurrentUser();

const headers = {
  Authorization: `Bearer ${currentUser.token}`,
};

export const getProducts = () => axios.get(`${apiUrl}/products`, { headers });

export const getProductsFarmer = ({ id }) =>
  axios.get(`${apiUrl}/products/farmer/${id}`, { headers });

export const deleteProduct = (props) => {
  const { id } = props;
  return axios.delete(`${apiUrl}/products/${id}`, { headers });
};

export const updateProduct = (props) => {
  const { id, body } = props;
  return axios.put(`${apiUrl}/products/${id}`, body, { headers });
};
export const createProduct = (body) => {
  return axios.post(`${apiUrl}/products`, body, { headers });
};

export const getProduct = (id) => {
  return axios.get(`${apiUrl}/products/${id}`, { headers });
};

export default getProducts;
