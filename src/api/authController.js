import {BaseController} from "./baseController";

export class AuthController extends BaseController{
    getAuth(params){
        return this.instance.get(`auth/admin`,{params})

    }
}