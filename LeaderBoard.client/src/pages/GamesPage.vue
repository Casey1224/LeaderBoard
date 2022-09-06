<template>
    <div class="games container-fluid">
        <h1 class="text-center">Games</h1>
        <SearchGameForm/>
        <div class="row">
            <div class="justify-content-around d-flex">
                <div class="col-2 btn btn-outline-dark rounded-pill" @click="filterTerm = ''">All</div>
                <div class="col-2 btn btn-outline-dark rounded-pill" @click="filterTerm = 'card game'">Card Games</div>
                <div class="col-2 btn btn-outline-dark rounded-pill" @click="filterTerm = 'board game'">Board Games</div>
                <div class="col-2 btn btn-outline-dark rounded-pill" @click="filterTerm = 'video game'">Video Games</div>
                <div class="col-2 btn btn-outline-dark rounded-pill" @click="filterTerm = 'sport'">Sport</div>
            </div>
        </div>
        <div class="justify-content-center d-flex">
            <button class="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#createGameModal">
                Create Game
            </button>
        </div>
        <div class="row">
            <div class="col-3" v-for="g in games" :key="g.id">
                <GameCard :game="g" />
            </div>
        </div>
    </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import { AppState } from '../AppState.js';
import { gamesService } from '../services/GamesService.js';
import Pop from '../utils/Pop.js';
import SearchGameForm from '../components/SearchGameForm.vue';

export default {
    setup() {
        const filterTerm = ref("");
        async function getAll() {
            try {
                await gamesService.getAll();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        onMounted(() => {
            getAll();
            AppState.activeGame = {};
        });
        return {
            filterTerm,
            games: computed(() => AppState.games.filter(g => filterTerm.value ? g.type == filterTerm.value : true)),
        };
    },
    components: { SearchGameForm }
}
</script>


<style lang="scss" scoped>
</style>