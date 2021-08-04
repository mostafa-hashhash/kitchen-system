import axios from 'axios'

let token = document.cookie
  .split('; ')
  .find(row => row.startsWith('ACCESS_TOKEN='))
  .split('=')[1];

export const instance = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  }
});

