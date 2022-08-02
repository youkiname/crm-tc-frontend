import { BaseController } from "./baseController";

export class BannersController extends BaseController {
    getBanners() {
        return this.instance.get(`admin/banners/`)
    }

    getBanner(id) {
        return this.instance.get(`admin/banners/${id}`)
    }

    editBanner(id, data, ImageForm) {
        // actually this route uses put method, but we need to use post:
        // https://stackoverflow.com/questions/50691938/patch-and-put-request-does-not-working-with-form-data
        data['_method'] = 'put'
        return this.instance.post(`admin/banners/${id}`, ImageForm, {
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

