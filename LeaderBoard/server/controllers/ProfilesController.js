import { profileService } from '../services/ProfileService.js'
import BaseController from '../utils/BaseController'
import { matchesService } from '../services/MatchesService'

export class ProfilesController extends BaseController {
  constructor() {
    super('api/profiles')
    this.router
      .get('', this.getProfiles)
      .get('/:id', this.getProfile)
      .get('/:profileId/matches', this.getMatchesByProfileId)
  }

  async getProfiles(req, res, next) {
    try {
      const profiles = await profileService.findProfiles(req.query.name, req.query.offset)
      res.send(profiles)
    } catch (error) {
      next(error)
    }
  }
  async getMatchesByProfileId(req, res, next) {
    try {
      const matches = await matchesService.getMatchesByProfileId(req.params.profileId)
      return res.send(matches)
    } catch (error) {
      next(error)

    }
  }

  async getProfile(req, res, next) {
    try {
      const profile = await profileService.getProfileById(req.params.id)
      res.send(profile)
    } catch (error) {
      next(error)
    }
  }
}
