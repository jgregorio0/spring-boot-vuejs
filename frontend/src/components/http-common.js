import axios from 'axios'

export const AXIOS = axios.create({
  // baseURL: `http://localhost:8088`,
  baseURL: `http://192.168.1.128:8088`,
  headers: {
    // 'Access-Control-Allow-Origin': 'http://localhost:8080'
    'Access-Control-Allow-Origin': 'http://192.168.1.60:8080'
  }
})
