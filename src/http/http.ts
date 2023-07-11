import axios from "axios";

export const privateApi = axios.create({baseURL: 'https://connections-api.herokuapp.com'})
export const publicApi = axios.create({baseURL: 'https://63e61ee87eef5b22337f4289.mockapi.io'})
export const setAuthHeader = (token: string)=>{
    privateApi.defaults.headers.common.Authorization= `Bearer ${token}`;
  }