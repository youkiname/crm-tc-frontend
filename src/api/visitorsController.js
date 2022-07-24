import { BaseController } from "./baseController";

export class VisitorsController extends BaseController {
    getVisitorsCountIndicatorMonth() {
        return this.instance.get("admin/statistic/visitors/month")
    }

    getVisitorCountIndicatorToday() {
        return this.instance.get("admin/statistic/visitors/today")
    }

    getVisitorsGraph(startDate, endDate) {
        return this.instance.get(`admin/statistic/visitors_graph/`, {
            params: {
                "start_date": startDate,
                "end_date": endDate
            }
        })
    }

    getVisitorsGraphMonth() {
        return this.instance.get("admin/statistic/visitors_graph/month")
    }

    getVisitorsAgePlot(range = 'week') {
        return this.instance.get(`admin/statistic/visitors/age_plot/${range}`)
    }
}
