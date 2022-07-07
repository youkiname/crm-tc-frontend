import { BaseController } from "./baseController";

export class ShopsController extends BaseController {
    saveShop(data, avatarForm) {
        return this.instance.post(`shops`, avatarForm, {
            params: data
        })
    }

    getShops() {
        return this.instance.get(`shops`)
    }

    getShopCategories() {
        return this.instance.get(`shops/categories`)
    }

    getShopsIncomeStatistics() {
        return this.instance.get(`statistic/shops`)
    }
}

