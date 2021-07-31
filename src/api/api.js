import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://37.230.116.58/api/',
});