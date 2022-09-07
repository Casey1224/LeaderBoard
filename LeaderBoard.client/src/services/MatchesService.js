import { AppState } from "../AppState"
import { api } from "./AxiosService"

class MatchesService{
    async createMatch(newMatch){
        const res = await api.post('api/matches', newMatch)
        AppState.matches.unshift(res.data)
        // return res.data
    }
}

export const matchesService = new MatchesService()