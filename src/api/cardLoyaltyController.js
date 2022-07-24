import { BaseController } from "./baseController";

export class CardLoyaltyController extends BaseController {
    updateCardStatus(statusId, data) {
        return this.instance.put(`admin/card_statuses/${statusId}`, data)
    }

    getCardStatuses() {
        return this.instance.get(`admin/card_statuses/`)
    }
}

