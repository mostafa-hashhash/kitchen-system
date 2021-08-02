import axios from 'axios'

let token = document.cookie
  .split('; ')
  .find(row => row.startsWith('access_token='))
  .split('=')[1];

export const instance = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
});

