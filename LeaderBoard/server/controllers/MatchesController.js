import { Auth0Provider } from "@bcwdev/auth0provider";
import { matchesService } from "../services/MatchesService";
import BaseController from "../utils/BaseController";


export class MatchesController extends BaseController {
    constructor() {
        super('api/matches')
        this.router
        .get('', this.getMyMatches)
        .get('/:id', this.getById)
        .get('/:profileId', this.getProfileMatches)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createMatch)
        .put('/:id', this.editMatch)

    }
    async createMatch(req, res, next) {
        try {
            let match = await matchesService.createMatch(req.body)
            return res.send(match)
        } catch (error) {
            next(error)
        }
    }

    async getMyMatches(req, res, next) {
        try {
            let matches = await matchesService.getMyMatches(req.userInfo.id)
            res.send(matches)
        } catch (error) {
            next(error)
        }
    }

    async getById(req, res, next){
        try {
            const match = await matchesService.getById(req.params.id)
            return res.send(match)
        } catch (error) {
            next(error)
        }
    }

    async getProfileMatches(req, res, next) {
        try {
            let matches = await matchesService.getProfileMatches(req.params.profileId)
            res.send(matches)
        } catch (error) {
            next(error)
        }
    }

    async editMatch(req, res, next){
        try {
            let match = await matchesService.editMatch(req.params.id, req.body)
            return res.send(match)
        } catch (error) {
            next(error)
        }
    }
}