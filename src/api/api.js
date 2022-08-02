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

    updateProfile(data, formData) {
        // actually this route uses put method, but we need to use post:
        // https://stackoverflow.com/questions/50691938/patch-and-put-request-does-not-working-with-form-data
        data['_method'] = 'put'
        return this.instance.post(`admin/update_profile`, formData, {
            params: data
        })
    }
}

