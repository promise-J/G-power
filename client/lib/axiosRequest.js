import axios from 'axios'

const remote = "https://godspower.onrender.com/api"
const local  = "http://localhost:5000/api"

const baseURL = remote

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;