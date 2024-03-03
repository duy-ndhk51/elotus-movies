import axios from 'axios';

const client = axios.create({
  baseURL: '/api',
  headers: {
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json',
  },
});

export default client;
