import { BaseController } from "./baseController";

export class BannersController extends BaseController {
    getBanners() {
        return this.instance.get(`admin/banners/`)
    }

    getBanner(id) {
        return this.instance.get(`admin/banners/${id}`)
    }

    editBanner(id, data, ImageForm) {
        return this.instance.put(`admin/banners/${id}`, ImageForm, {
            params: data
        })
    }

    saveNewBanner(data, imageForm) {
        return this.instance.post(`admin/banners`, imageForm, {
            params: data
        })
    }

    toggleActiveBannerState(id, is_active) {
        let route = 'admin/banners/activate'
        if (is_active) {
            route = 'admin/banners/deactivate'
        }
        return this.instance.put(`${route}/${id}`)
    }
}

