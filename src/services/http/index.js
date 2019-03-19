import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

/* eslint-disable */
instance.interceptors.request.use((config) => {
  config.headers.Authorization = 'Bearer '.concat(localStorage.getItem('token'));
  return config;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
  if (typeof (response.headers.access_token) !== 'undefined') {
    localStorage.setItem('token', response.headers.access_token);
    console.log(response);
  }
  if (typeof (response.data.access_token) !== 'undefined') {
    localStorage.setItem('token', response.data.access_token);
    console.log(response);
  }
  return response;
}, function (error) {
  console.log(error.response.status);
  if (error.response.status === 401) {
    localStorage.removeItem('token');
    this.$router.push('/login');
  }
  return Promise.reject(error);
});
// eslint-enable max-len 

export default instance;
