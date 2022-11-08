/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { encode } from 'base-64';
import { urlBase } from '../constants/config';

const baseUrl = urlBase;

const login = (body) => {
  let contrasenaCifrada = body.password;
  for (let i = 0; i < 5; i++) {
    contrasenaCifrada = encode(contrasenaCifrada);
  }
  body.password = contrasenaCifrada;
  console.log(contrasenaCifrada);
  return axios.post(`${baseUrl}/auth/login`, body);
};

export const obtnerModulosMenus = (id, headers) =>
  axios.get(`${baseUrl}/auth/modulos_menus/${id}`, { headers });

export default login;
