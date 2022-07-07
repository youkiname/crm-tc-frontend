import { BaseController } from "./baseController";

export class BannersController extends BaseController {
    getBanners() {
        return this.instance.get(`banners/`)
    }

    getBanner(id) {
        return this.instance.get(`banners/${id}`)
    }

    editBanner(id, data, ImageForm) {
        return this.instance.put(`banners/${id}`, ImageForm, {
            params: data
        })
    }

    saveNewBanner(data, imageForm) {
        return this.instance.post(`banners`, imageForm, {
            params: data
        })
    }

    toggleActiveBannerState(id, is_active) {
        let route = 'banners/activate'
        if (is_active) {
            route = 'banners/deactivate'
        }
        return this.instance.put(`${route}/${id}`)
    }
}

