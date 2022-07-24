import { BaseController } from "./baseController";

export class ApiController extends BaseController {
    getCustomerStatistics(searchQuery = null) {
        return this.instance.get(`admin/statistic/customers`, {
            params: { q: searchQuery }
        })
    }

    getShoppingCenters() {
        return this.instance.get(`admin/shopping_centers`)
    }

    getCities() {
        return this.instance.get(`admin/cities`)
    }

    updateProfile(data, avatarForm) {
        return this.instance.put(`admin/update_profile`, avatarForm, {
            params: data
        })
    }
}

