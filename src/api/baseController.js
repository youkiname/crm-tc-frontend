import axios from "axios";

export class BaseController {
    instance = axios.create({
        baseURL: "https://api.top-sistem.ru/api/",
        headers: {
            common: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                Accept: 'application/json',
                // enctype: "multipart/form-data",
                // "Content-Type": "multipart/form-data"
                // "Content-Type": "application/x-www-form-urlencoded"
            }
        }
    })
}