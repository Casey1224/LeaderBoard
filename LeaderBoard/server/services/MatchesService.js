import { dbContext } from "../db/DbContext"


class MatchesService {
    async getMatchesByProfileId(profileId) {
        let matches = await dbContext.Matches.find({ playerIds: profileId }).populate('players game', 'name picture')
        return matches
    }
    async getMyMatches(userId) {
        const matches = await dbContext.Matches.find({ playerIds: userId }).populate('players game', 'name picture')
        return matches
    }

    async getById(id) {
        const match = await dbContext.Matches.findById(id)
            .populate('players', 'name picture')
            .populate('game', 'name img')
        return match
    }

    async getProfileMatches(profileId) {
        const matches = await dbContext.Matches.find({ playerIds: profileId }).populate('players game')
        return matches
    }

    async createMatch(newMatch) {

        const game = await dbContext.Games.findById(newMatch.gameId)

        const match = await dbContext.Matches.create(newMatch)
        await match.populate('players', 'name picture')
        await match.populate('game')
        // @ts-ignore
        await game.save()
        return match
    }

    async getMatchesByGameId(gameId) {
        const matches = await dbContext.Matches.find({ gameId }).populate('players', 'name picture')
        return matches
    }

    async getMatchesByAccountId(accountId) {
        let matches = await dbContext.Matches.find({ accountId: accountId }).populate('game')
        return matches
    }

    async editMatch(id, matchData) {
        const match = await this.getById(id)
        match.playerIds = matchData.playerIds || match.playerIds
        match.winnerId = matchData.winnerId || match.winnerId
        await match.save()
        return match
    }
}



export const matchesService = new MatchesService()