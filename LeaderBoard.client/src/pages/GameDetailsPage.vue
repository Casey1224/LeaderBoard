<template>
    <div class="container-fluid">
        <div class="row">
            <div class="">
                <div class="card rounded elevation-2" @click="goTo">
                <div class="card-body">
                <img class="img-fluid rounded" :src="game.img" alt="">
            </div>
        <div class="card-footer">
            <h4>{{game.name}}</h4>
            <p>{{game.minPlayer}} - {{game.maxPlayer}} Players</p>
            <p>{{game.type}}</p>
            <p>{{game.description}}</p>
            <p>{{game.rules}}</p>
        </div>
    </div>
            </div>
        </div>
    </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { gamesService } from '../services/GamesService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    const route = useRoute()
    async function getById(){
        try {
            await gamesService.getById(route.params.gameId)
        } catch (error) {
            Pop.error('Getting Game By Id', error)
            logger.error(error)
        }
    }
    onMounted(() => {
        getById()
    })
    return {
        game: computed(() => AppState.activeGame)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>