import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_API || 'http://localhost:3333/api',
});