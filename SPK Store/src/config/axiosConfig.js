// Central Axios instance for all API calls to the Spring Boot backend
// Base URL points to localhost:8080 during development

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/spk-api';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // 10 seconds
});

//Request Interceptor 
// Automatically attach JWT token from localStorage or sessionStorage to every request
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('spk_token') || sessionStorage.getItem('spk_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor 
// Handle global errors (e.g., 401 Unauthorized → redirect to login)
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Token expired or invalid — clear both storages and redirect
            localStorage.removeItem('spk_token');
            localStorage.removeItem('spk_user');
            sessionStorage.removeItem('spk_token');
            sessionStorage.removeItem('spk_user');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
