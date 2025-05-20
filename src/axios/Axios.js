import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://localhost:8082',
  withCredentials: true
});

Axios.interceptors.request.use((config) => {
  const publicPaths = ["/menus/all", "/categories/all", "/usuarios/login", "/usuarios/create"];

  const isPublic = publicPaths.some(path => config.url.includes(path));
  if (!isPublic) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config; 
});

export default Axios;