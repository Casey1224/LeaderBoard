import { AuthPlugin } from "@bcwdev/auth0provider-client"
import { AppState } from "../AppState"
// import { router } from "../router.js"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class MatchesService {
    async createMatch(match) {
        const res = await api.post('api/matches', match)
        AppState.matches.unshift(res.data)
        AppState.activeMatch = res.data
        logger.log(res.data)
    }

    async getMyMatches() {
        const res = await api.get('api/matches')
        logger.log(res.data)
    }

    async getProfileMatches(profileId) {
        const res = await api.get(`api/profiles/${profileId}/matches`)
        logger.log('profile matches', res.data)
        AppState.profileMatches = res.data
    }
     async getMatchById(matchId){
        const res = await api.get(`api/matches/${matchId}`)
        logger.log('getting match by id', res.data)
        AppState.activeMatch = res.data
     }

    async editMatch(matchEdit, matchId){
        const res = await api.put(`api/matches/${matchId}`, matchEdit)
        logger.log("[Active Match pre res.data]", AppState.activeMatch)
        logger.log('edit match', res.data)
        AppState.activeMatch = res.data
        logger.log("[Active Match post res.data]", AppState.activeMatch)
        logger.log("all matches", AppState.matches)
    }
}
export const matchesService = new MatchesService()