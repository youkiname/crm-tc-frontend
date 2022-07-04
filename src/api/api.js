import { BaseController } from "./baseController";

export class ApiController extends BaseController {


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


    getPolls() {
        return this.instance.get(`polls/`)
    }

    getColumnPlot(startDate, endDate) {
        return this.instance.get(`statistic/visitors_graph/`, {
            params: {
                "start_date": startDate,
                "end_date": endDate
            }
        })
    }

    getTransactionsSumGraph(startDate, endDate) {
        return this.instance.get(`statistic/transactions/average_sum/graph`, {
            params: {
                "start_date": startDate,
                "end_date": endDate
            }
        })

    }

    getVisitorsAgePlot(range = 'week') {
        return this.instance.get(`statistic/visitors/age_plot/${range}`)
    }

    getShoppingCenters() {
        return this.instance.get(`shopping_centers`)
    }

    getShops() {
        return this.instance.get(`shops`)
    }

    getShopCategories() {
        return this.instance.get(`shops/categories`)
    }

    saveNewBanner(data, imageForm) {
        return this.instance.post(`banners`, imageForm, {
            params: data
        })
    }

    savePoll(data) {
        return this.instance.post(`polls`, null, {
            params: data
        })
    }

    saveShop(data, avatarForm) {
        return this.instance.post(`shops`, avatarForm, {
            params: data
        })
    }
}

