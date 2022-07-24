import { BaseController } from "./baseController";

export class ShopsController extends BaseController {
    saveShop(data, avatarForm) {
        return this.instance.post(`admin/shops`, avatarForm, {
            params: data
        })
    }

    getShops() {
        return this.instance.get(`admin/shops`)
    }

    getShopCategories() {
        return this.instance.get(`shops/categories`)
    }

    getShopsIncomeStatistics(searchQuery = null) {
        return this.instance.get(`admin/statistic/shops`, {
            params: { q: searchQuery }
        })
    }
}

