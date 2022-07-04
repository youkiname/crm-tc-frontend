import axios from "axios";
import { BaseController } from "./baseController";

export class AuthController extends BaseController {
    applyCsrfCookie() {
        return axios.get('https://api.top-sistem.ru/sanctum/csrf-cookie')
    }
    getAuth(params) {
        return this.instance.get(`auth/admin`, { params })
    }
    getMe() {
        return this.instance.get(`me/admin`)
    }
}