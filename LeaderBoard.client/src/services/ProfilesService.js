import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";
import { logger } from "../utils/Logger.js";
import { Profile } from "../models/Profile.js";

class ProfilesService {
    async getProfileBySearch(searchTerm) {
        const res = await api.get('/api/profiles', {
            params: {
                name: searchTerm
            }
        })
        logger.log('did this work?', res.data)
        AppState.profiles = res.data.map(p => new Profile(p))
        logger.log(AppState.profiles, 'my profiles')
        return res.data
    }
    async getProfileById(id) {

        const res = await api.get('api/profiles/' + id)
        logger.log('got profiles by id', res.data)
        AppState.activeProfile = res.data

    }
}


export const profilesService = new ProfilesService()