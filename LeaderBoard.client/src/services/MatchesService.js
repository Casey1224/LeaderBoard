import { AuthPlugin } from "@bcwdev/auth0provider-client"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class MatchesService {
    async createMatch(newMatch) {
        const res = await api.post('api/matches', newMatch)
        AppState.matches.unshift(res.data)
        // return res.data
    }

    async getMyMatches() {
        const res = await api.get('api/matches')
        logger.log(res.data)
    }

    async getProfileMatches(profileId) {
        const res = await api.get(`api/matches/${profileId}`)
        logger.log('profile matches', res.data)
        AppState.profileMatches = res.data
    }
}
export const matchesService = new MatchesService()