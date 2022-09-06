<template>
    <div class="row">
        <div class="justify-content-around d-flex">
            <form @submit.prevent="searchGames" class="col-12">
                <input type="text" class="form-control col-6" placeholder="Search Profiles" required v-model="query">
                <button class="col-2 btn btn-secondary">Search</button>
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