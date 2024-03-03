import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.MOVIE_DB_API,
  headers: {
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}`,
  },
});
