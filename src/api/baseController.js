import axios from "axios";
import { message } from 'antd';

function getCookie(name) {
    const value = `; ${document.cookie}`;
    console.log(document.cookie)
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Create axios instance with base url and credentials support
export const axiosInstance = axios.create({
    // baseURL: "https://top-sistem.ru/api/",
    baseURL: "http://127.0.0.1:8000/api/",
    withCredentials: true,
    credentials: true,
    headers: {
        common: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            Accept: 'application/json',
        }
    }
});

// A function that calls '/api/csrf-cookie' to set the CSRF cookies. The 
// default is 'sanctum/csrf-cookie' but you can configure it to be anything.
const setCSRFToken = () => {
    return axiosInstance.get('/csrf-cookie');
}

// Request interceptor. Runs before your request reaches the server
const onRequest = (config) => {
    // If http method is `post | put | delete` and XSRF-TOKEN cookie is 
    // not present, call '/sanctum/csrf-cookie' to set CSRF token, then 
    // proceed with the initial response
    const methods = ['post', 'put', 'delete']
    if (methods.includes(config.method) && !getCookie('XSRF-TOKEN')) {
        return setCSRFToken().then(response => config);
    }
    return config;
}

axiosInstance.interceptors.request.use(onRequest, null);
axiosInstance.interceptors.response.use((response) => response, (error) => {
    message.error("Произошла ошибка при выполнении запроса.")
    throw error;
});

export class BaseController {
    instance = axiosInstance
}