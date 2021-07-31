import axios from 'axios';

let withCredentials = false;

const headers = {
   'X-CSRF-TOKEN': "XSRF-TOKEN",
   'Access-Control-Allow-Origin': '*',
   'X-Requested-With': 'XMLHttpRequest',
   'Content-Type': 'application/json',
};

export const api = axios.create({
  baseURL: 'http://37.230.116.58/api/',
  withCredentials: withCredentials,
  headers
});