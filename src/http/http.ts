import axios from "axios";

export const privateApi = axios.create({baseURL: 'https://connections-api.herokuapp.com'})