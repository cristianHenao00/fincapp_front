import axios from 'axios';
import { apiUrl } from 'constants/config';
import { getCurrentUser } from 'helpers/Utils';

const currentUser = getCurrentUser();

const headers = {
  Authorization: `Bearer ${currentUser.token}`,
};

export const getOrders = () => axios.get(`${apiUrl}/orders`, { headers });

export const getOrdersUsers = () =>
  axios.get(`${apiUrl}/orders/users`, { headers });

export const saveOrderProducts = (props) => {
  const { body } = props;
  return axios.post(`${apiUrl}/orders/saveProductOrder/`, body, {
    headers,
  });
};

export const getOrdersOrderer = ({ id }) =>
  axios.get(`${apiUrl}/orders/farmer/${id}`, { headers });

export const deleteOrder = (props) => {
  const { id } = props;
  return axios.delete(`${apiUrl}/orders/${id}`, { headers });
};

export const updateOrder = (props) => {
  const { id, body } = props;
  return axios.put(`${apiUrl}/orders/${id}`, body, { headers });
};
export const createOrder = (body) => {
  console.log(body);
  return axios.post(`${apiUrl}/orders`, body, { headers });
};

export const getOrder = (id) => {
  return axios.get(`${apiUrl}/orders/${id}`, { headers });
};

export const getHistoryOrder = ({ id }) => {
  return axios.get(`${apiUrl}/orders/history/${id}`, { headers });
};

export const getOrdersCartUser = () => {
  return axios.get(`${apiUrl}/orders/cart`, { headers });
};

export default getOrders;
