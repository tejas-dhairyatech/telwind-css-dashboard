// axiosInstance.ts
import axios from 'axios';
import { API_BASE_URL } from '../../utils/constants/api/apiEndpoints';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL.LOCAL,
    timeout: 10000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Handle unauthorized errors
            console.error('Unauthorized. Redirecting to login.');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
