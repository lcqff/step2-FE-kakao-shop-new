import axios from 'axios';
const staticServerUri = process.env.REACT_APP_PATH || '';

const instance = axios.create({
  baseURL: staticServerUri + '/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  const configuration = config;
  if (token) {
    configuration.headers.Authorization = `Bearer ${token}`;
  }
  return configuration;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw new Error(error);
  },
);

export default instance;
