import axios from "axios";

export class BaseController {
    instance = axios.create({
        baseURL: "https://api.top-sistem.ru/api/",
        headers: {
            get: {
                Authorization: `Bearer 2|IRchrSlVZhblhqS5nUcz9cAQCM3vUS01rhMkA7fg`,
                Accept: 'application/json',
            }
        }
    })
}