import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class GamesService {
    async getAll(){
        const res = await api.get('api/games')
        logger.log('Got Games', res.data)
        AppState.games = res.data
    }
    async getById(gameId){
        const res = await api.get(`api/games/${gameId}`)
        logger.log('Got Game By Id', res.data)
        AppState.activeGame = res.data
    }
    async createGame(newGame){
        const res = await api.post('api/games', newGame)
        logger.log("create game", res.data)
        AppState.games.unshift(res.data)
    }
    async deleteGame(gameId){
        const res = await api.delete(`api/games/${gameId}`)
        logger.log('Canceling Game')
        AppState.games = AppState.games.filter(g => g.id != gameId)
    }
}

export const gamesService = new GamesService()