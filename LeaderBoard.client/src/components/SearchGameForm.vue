<template>
    <div class="row m-3">
        <div class="justify-content-around d-flex">
            <form @submit.prevent="searchGames" class="col-5">
                <div class="d-flex">
                <input type="text" class="form-control col-6" placeholder="Search Games" required v-model="query">
                <button class="col-2 btn btn-outline-secondary">Search</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { gamesService } from '../services/GamesService.js';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {
    setup() {

        const query = ref("");

        return {
            query,
            async searchGames() {
                try {
                    logger.log("searching Games");
                    logger.log('[Query]', query.value)
                    await gamesService.getGamesBySearch(query.value);
                    
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