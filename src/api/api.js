import axios from "axios";
class ApiController {
    instance = axios.create({
        baseURL: "http://127.0.0.1:8000/api/",
        headers: {
            get: {
                Authorization: `Bearer 2|ilDH2Xn2Ryv1dn75f5exaAIPwDVOoOAaeFCwC5L6`,
                Accept: 'application/json',
            }
        }
    })
    getTransactSum() {
        return this.instance.get("statistic/transactions/sum")
    }
    getVisitorsCountIndicatorMounth() {
        return this.instance.get("statistic/visitors/month")
    }
    getVisitorCountIndicatorToday() {
        return this.instance.get("statistic/visitors/today")
    }
    getStatisticTransactionToday() {
        return this.instance.get("statistic/transactions/sum/today")
    }
    getStatisticUsersGraphMonth() {
        return this.instance.get("statistic/visitors_graph/month")
    }
    getStatisticAverageSumMonth() {
        return this.instance.get("statistic/transactions/average_sum/month")
    }
    getStatisticAverageSumToday() {
        return this.instance.get("statistic/transactions/average_sum/today")
    }
    getStatisticAverageGraph() {
        return this.instance.get("statistic/transactions/average_sum/graph")
    }
    getLastTransaction(limit = 10) {
        return this.instance.get(`transactions?limit=${limit}`)
    }
    getShopsIncomeStatistics() {
        return this.instance.get(`statistic/shops`)
    }
    getBanners() {
        return this.instance.get(`banners/`)
    }
    getCustomerStatistics() {
        return this.instance.get(`statistic/customers`)
    }
    getCardStatuses() {
        return this.instance.get(`card_statuses/`)
    }
    updateCardStatus(statusId, newData) {
        return this.instance.put(`card_statuses/${statusId}`, { params: newData })
    }
    getPolls() {
        return this.instance.get(`polls/`)
    }
}
export const apiController = new ApiController()
