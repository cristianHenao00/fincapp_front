import axios from 'axios';
import { urlBase } from '../constants/config';

const baseUrl = urlBase;

const Registro = (body) => axios.post(`${baseUrl}/auth/registro`, body);

export default Registro;
