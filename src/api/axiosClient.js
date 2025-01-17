// src/api/axiosClient.js
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000', // or your deployed server
  // timeout: 5000, // optional
});

// Optionally add interceptors
// e.g. logging or attaching auth tokens
axiosClient.interceptors.request.use(
  (config) => {
    // e.g. attach token if you have auth
    // config.headers.Authorization = `Bearer ${myToken}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // handle errors
    // e.g. show toast notification
    return Promise.reject(error);
  }
);

export default axiosClient;
