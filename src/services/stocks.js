import axios from 'axios';
import { apiUrl } from 'constants/config';
import { getCurrentUser } from 'helpers/Utils';

const currentUser = getCurrentUser();

const headers = {
  Authorization: `Bearer ${currentUser.token}`,
};

export const getStocks = () => axios.get(`${apiUrl}/stocks`, { headers });

export const getStocksFarmer = ({ id }) =>
  axios.get(`${apiUrl}/stocks/farmer/${id}`, { headers });

export const deleteStock = (props) => {
  const { id } = props;
  return axios.delete(`${apiUrl}/stocks/${id}`, { headers });
};

export const updateStock = (props) => {
  const { id, body } = props;
  return axios.put(`${apiUrl}/stocks/${id}`, body, { headers });
};
export const createStock = (body) => {
  return axios.post(`${apiUrl}/stocks`, body, { headers });
};

export const getStock = (id) => {
  return axios.get(`${apiUrl}/stocks/${id}`, { headers });
};

export default getStocks;
