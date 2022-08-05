import axios from "axios";

const api = axios.create({
 baseURL: "http://192.168.1.40:8000/api",
});

api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('auth')
      if (token) {
         config.headers.Authorization = `Bearer ${token}`
         config.headers["Content-Type"] = "application/json"
      } else {
         // Do something... Usually logout user.
      }
      return config
    }
)

export default api;
