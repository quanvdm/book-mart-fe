import axios from "axios";

const intansce = axios.create({
  baseURL: "https://localhost:8080/api"
})
// Add a request interceptor
intansce.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

intansce.interceptors.response.use(function (response) {

  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export default intansce