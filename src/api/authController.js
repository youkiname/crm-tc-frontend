import { BaseController } from "./baseController";

export class AuthController extends BaseController {
    applyCsrfCookie() {
        return this.instance.get('csrf-cookie')
    }
    getAuth(params) {
        return this.instance.get(`auth/admin`, { params })
    }
    getMe() {
        return this.instance.get(`me/admin`)
    }
    logout() {
        return this.instance.post(`logout`)
    }
}