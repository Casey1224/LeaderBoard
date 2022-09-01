<template>
    <div class="container-fluid bg-dark text-light">
        <div class="row">
            <div class="col-10">

                <form @submit.prevent="searchProfile">
                    <label for="" class="form-label">Search Profiles</label>
                    <input type="text" class="form-control" required v-model="query">
                    <button class="btn btn-info">Search</button>
                </form>

            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { profilesService } from '../services/ProfilesService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {
    setup() {

        const query = ref("");

        return {
            query,
            async searchProfile() {
                try {
                    logger.log("searching Profiles");
                    await profilesService.getProfileBySearch(query.value);
                    query.value = "";
                }
                catch (error) {
                    Pop.error(error);
                }
            }
        }
    }
}


</script>