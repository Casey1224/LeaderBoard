<template>
    <div class="games container-fluid">
        <div class="row">
            <h1 class="text-center">Games</h1>
            <div class="">
                <div class="col-3" v-for="g in games" :key="g.id">
                    <GameCard :game="g"/>
                </div>
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

export default {
  setup() {
    const filterTerm = ref('')
    async function getAll() {
        try {
            await gamesService.getAll()
        } catch (error) {
            Pop.error(error)
        }
    }
    onMounted(() => {
        getAll()
    })

    return {
        filterTerm,
        games: computed(() => AppState.games.filter(g => filterTerm.value ? g.type == filterTerm.value : true)),
    }
  },
//   components: { GameCard }
}
</script>


<style lang="scss" scoped>
</style>