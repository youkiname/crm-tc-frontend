import { BaseController } from "./baseController";

export class PollsController extends BaseController {
    getPolls() {
        return this.instance.get(`polls/`)
    }

    getPoll(id) {
        return this.instance.get(`polls/${id}`)
    }

    editPoll(id, data) {
        return this.instance.put(`polls/${id}`, data)
    }

    toggleActivePollState(id, is_active) {
        let route = 'polls/activate'
        if (is_active) {
            route = 'polls/deactivate'
        }
        return this.instance.put(`${route}/${id}`)
    }

    savePoll(data) {
        return this.instance.post(`polls`, null, {
            params: data
        })
    }
}

