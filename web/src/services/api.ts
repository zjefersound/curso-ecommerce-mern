import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_API || 'Error: Api url is not defined',
});