import axios from 'axios';
import { apiUrl } from '../constants/config';

const baseUrl = apiUrl;

const Registro = (body) => axios.post(`${baseUrl}/auth/registro`, body);

export default Registro;
