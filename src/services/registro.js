import axios from 'axios';
import { apiUrl } from '../constants/config';

const baseUrl = apiUrl;

const Registro = (body) => axios.post(`${baseUrl}/signin`, body);

export default Registro;
