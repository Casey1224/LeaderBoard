<template>

    <div class="container-fluid bg-dark text-light">
        <div class="row">
            <div class="col-10">
                <form @submit.prevent="handleSubmit">
                    <label for="" class="form-label">Search Profiles</label>
                    <input type="text" class="form-control" v-model="query">
                    <button class="btn btn-info">Search</button>

                </form>
            </div>
        </div>
    </div>





</template>
<script>
import { profilesService } from '../services/ProfilesService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {
    setup() {
        return {
            async handleSubmit(id) {
                try {
                    logger.log('searching Profiles')
                    await profilesService.getProfileById(id)
                } catch (error) {
                    Pop.error(error)
                }
            }
        };
    },
};
</script>
<style>
</style>