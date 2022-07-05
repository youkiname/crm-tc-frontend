import { BaseController } from "./baseController";

export class AuthController extends BaseController {
    getVerifyCode(params) {
        return this.instance.get('auth/verify',{
            params
        })
    }
    getAuth(params) {
        return this.instance.get(`auth/admin`, { params })
    }
    getMe() {
        return this.instance.get(`me/admin`)
    }
}