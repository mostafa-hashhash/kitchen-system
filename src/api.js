import axios from 'axios'
let access_token = ""
if (document.cookie)
  access_token = document.cookie.split(';').filter(row => row.startsWith('access'))[0].split('=')[1]

export const instance = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `${access_token}`
  }
});

