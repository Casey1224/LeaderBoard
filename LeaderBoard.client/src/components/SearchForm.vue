<template>
        <div class=" d-flex justify-content-center">
            <div class=" container rounded   searchCard text-light py-3">
                <form @submit.prevent="searchProfile" class="">
                    <div class="row d-flex justify-content-around">
                        <!-- <label for="" class="text-dark form-label">Search Profiles</label> -->
                        <input type="text" class=" col-8 rounded" placeholder="Search Profiles" required
                            v-model="query">
                        <!-- <div class="d-flex justify-content-center justify-space-around"> -->
                        <button class="mt-2 col-2 btn searchButton">Search</button>
                        <!-- </div> -->
                    </div>
                </form>
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

<style>
.searchButton {
    background-color: rgb(183, 249, 249);
}
</style>