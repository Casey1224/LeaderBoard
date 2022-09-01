import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class GamesService {
    async getAll(){
        const res = await api.get('api/games')
        logger.log('Got Games', res.data)
        AppState.games = res.data
    }
}

export const gamesService = new GamesService()