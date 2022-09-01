import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";
import { logger } from "../utils/Logger.js";
import { Profile } from "models/Profile.js"
class ProfilesService {
    async getProfileById(id) {
        const res = await api.get(`api/profiles/${id}`)
        logger.log('did this work?', res.data)
        AppState.activeProfile = new Profile(res.data)
    }
}


export const profilesService = new ProfilesService()