import axios from 'axios';
import { apiUrl } from '../constants/config';
import { getCurrentUser } from '../helpers/Utils';

const baseUrl = apiUrl;

const currentUser = getCurrentUser();

const headers = {
  Authorization: `Bearer ${currentUser.token}`,
};

export const resetPassword = (body) =>
  axios.post(`${baseUrl}/reset`, body, { headers });

export default resetPassword;
