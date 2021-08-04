import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `${document.cookie.substr(13)}`
  }
});

