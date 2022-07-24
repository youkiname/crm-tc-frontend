import { BaseController } from "./baseController";

export class PollsController extends BaseController {
    getPolls() {
        return this.instance.get(`admin/polls/`)
    }

    getPoll(id) {
        return this.instance.get(`admin/polls/${id}`)
    }

    editPoll(id, data) {
        return this.instance.put(`admin/polls/${id}`, data)
    }

    toggleActivePollState(id, is_active) {
        let route = 'admin/polls/activate'
        if (is_active) {
            route = 'admin/polls/deactivate'
        }
        return this.instance.put(`${route}/${id}`)
    }

    savePoll(data) {
        return this.instance.post(`admin/polls`, null, {
            params: data
        })
    }
}

