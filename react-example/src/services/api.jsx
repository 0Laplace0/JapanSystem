import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // เปลี่ยนตาม backend จริง
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;