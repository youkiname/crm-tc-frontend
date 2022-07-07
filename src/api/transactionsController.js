import { BaseController } from "./baseController";

export class TransactionsController extends BaseController {
    getSalesRate() {
        return this.instance.get(`statistic/transactions/sales_rate`)
    }

    getTransactionsSumGraph(startDate, endDate) {
        return this.instance.get(`statistic/transactions/average_sum/graph`, {
            params: {
                "start_date": startDate,
                "end_date": endDate
            }
        })
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

    getTransactionsSum() {
        return this.instance.get("statistic/transactions/sum")
    }

    getStatisticTransactionToday() {
        return this.instance.get("statistic/transactions/sum/today")
    }
}

