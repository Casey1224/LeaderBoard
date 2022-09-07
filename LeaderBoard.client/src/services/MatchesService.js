import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class MatchesService {
    async createMatch(newMatch) {
        const res = await api.post('api/matches', newMatch)
        AppState.matches.unshift(res.data)
        // return res.data
    }

    async getMatches() {
        const res = await api.get('api/matches')
        logger.log(res.data)
    }

}
export const matchesService = new MatchesService()