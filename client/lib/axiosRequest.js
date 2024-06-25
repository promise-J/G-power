const axios = require("axios");

const remote = "https://godspower.onrender.com/api"
const local  = "http://localhost:5000/api"

const baseURL = remote

// Create axios instance with base URL
const axiosInstance = axios.create({
  baseURL: baseURL, // Replace with your base URL
  timeout: 5000, // Optional timeout
  headers: {
    'Content-Type': 'application/json', // Example headers
  },
});

export default axiosInstance;