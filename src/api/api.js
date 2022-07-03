import axios from "axios";

class ApiController {
    instance = axios.create({
        baseURL: "https://api.top-sistem.ru/api/",
        headers: {
            get: {
                Authorization: `Bearer 2|IRchrSlVZhblhqS5nUcz9cAQCM3vUS01rhMkA7fg`,
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
        return this.instance.put(`card_statuses/${statusId}`, {params: newData})
    }

    getPolls() {
        return this.instance.get(`polls/`)
    }

    getColumnPlot(startDate,endDate) {
        return this.instance.get(`statistic/visitors_graph/`, {
            params: {
                "start_date": startDate,
                "end_date": endDate
            }
        })

    }
    getTransactionsSumGraph(startDate, endDate){
        return this.instance.get(`statistic/transactions/average_sum/graph`, {
            params: {
                "start_date": startDate,
                "end_date": endDate
            }
        })

    }
}

export const apiController = new ApiController()
