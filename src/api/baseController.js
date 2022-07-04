import axios from "axios";

export class BaseController {
    instance = axios.create({
        baseURL: "https://api.top-sistem.ru/api/",
        // baseURL: "http://127.0.0.1:8000/api/",
        withCredentials: true,
        headers: {
            common: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                email: `${localStorage.getItem('email')}`,
                password: `${localStorage.getItem('password')}`,
                "X-XSRF-TOKEN": `${localStorage.getItem('XSRF-TOKEN')}`,
                "X-Requested-With": 'XMLHttpRequest',
                Accept: 'application/json',
                // enctype: "multipart/form-data",
                // "Content-Type": "multipart/form-data"
                // "Content-Type": "application/x-www-form-urlencoded"
            }
        }
    })
}