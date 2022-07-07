import { BaseController } from "./baseController";

export class ApiController extends BaseController {

    getCustomerStatistics(searchQuery = null) {
        return this.instance.get(`statistic/customers`, {
            params: { q: searchQuery }
        })
    }

    getShoppingCenters() {
        return this.instance.get(`shopping_centers`)
    }

    getCities() {
        return this.instance.get(`cities`)
    }

    updateProfile(data, avatarForm) {
        return this.instance.put(`admins/update_profile`, avatarForm, {
            params: data
        })
    }
}

