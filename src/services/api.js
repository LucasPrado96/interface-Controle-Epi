import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3001'
})

api.interceptors.request.use((config) => {

    const userData = localStorage.getItem('admControlEpi:UserData')

    const token = userData && JSON.parse(userData).token

   config.headers.authorization = `bearer ${token}`
   return config;
})