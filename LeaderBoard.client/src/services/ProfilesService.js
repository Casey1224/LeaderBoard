import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";
import { logger } from "../utils/Logger.js";
import { Profile } from "../models/Profile.js";

class ProfilesService {
    async getProfileBySearch(searchTerm) {
        const res = await api.get('/api/profiles', {
            params: {
                query: searchTerm
            }
        })
        logger.log('did this work?', res.data)
        AppState.profiles = res.data.map(p => new Profile(p))
    }
}


export const profilesService = new ProfilesService()