import { BaseController } from "./baseController";

export class AuthController extends BaseController {
    getAuth(params) {
        return this.instance.get(`admin/auth`, { params })
    }

    getMe() {
        return this.instance.get(`get_me`)
    }

    logout() {
        return this.instance.post(`logout`)
    }
}