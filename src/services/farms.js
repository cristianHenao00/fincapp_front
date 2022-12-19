import axios from 'axios';
import { apiUrl } from '../constants/config';
import { getCurrentUser } from '../helpers/Utils';

const currentUser = getCurrentUser();

const headers = {
  Authorization: `Bearer ${currentUser.token}`,
};

const headersFile = {
  Authorization: `Bearer ${currentUser.token}`,
  'Content-Type': 'multipart/form-data',
};

export const getFarms = () => axios.get(`${apiUrl}/farms`, { headers });

export const getFarmsFarmer = ({ id }) =>
  axios.get(`${apiUrl}/farms/farmer/${id}`, { headers });

export const deleteFarm = (props) => {
  const { id } = props;
  return axios.delete(`${apiUrl}/farms/${id}`, { headers });
};

export const updateFarm = (props) => {
  const { id, body } = props;
  return axios.put(`${apiUrl}/farms/${id}`, body, { headers });
};
export const createFarm = (body) => {
  console.log(body);
  return axios.post(`${apiUrl}/farms`, body, { headers: headersFile });
};

export const getFarm = (id) => {
  return axios.get(`${apiUrl}/farms/${id}`, { headers });
};

export default getFarms;
