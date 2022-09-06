<template>
    <div class="container-fluid">
        <div class="text-center">
            <button class="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#createMatchModal">Start
                Match</button>
        </div>
        <div class="row justify-content-center">
            <div class="card rounded elevation-2 col-11" @click="goTo">
                <div class="card-body justify-content-center d-flex">
                    <img class="img-fluid rounded img" :src="game.img" alt="">
                </div>
                <div class="card-footer">
                    <h1 class="text-center">{{ game.name }}</h1>
                    <p>{{ game.minPlayer }} - {{ game.maxPlayer }} Players</p>
                    <p>{{ game.type }}</p>
                    <p>{{ game.description }}</p>
                    <p>{{ game.rules }}</p>
                </div>
                <div v-if="game.creatorId == account._id">
                    <i class="mdi mdi-delete-forever delete-button selectable" @click="deleteGame"></i>
                </div>
                <div v-if="game.creatorId == account._id">
                    <button class="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" 
                    data-bs-target="#createGameModal" >Edit Account</button>
                </div>
            </div>
        </div>
    </div>

    <!-- ANCHOR Create Match Modal -->
    <div class="modal fade" id="createMatchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create Match</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="handleSubmit" class="row">
                        <div class="col-6">
                            <label for="" class="form-label">Player 1 ({{ account.name }})</label>
                            <input type="text" v-model="account.id" class="form-control" name="player1" id="player1"
                                aria-describedby="nameHelp" required disabled>
                        </div>
                        <div class="col-6">
                            <label for="" class="form-label">Player 2</label>
                            <input type="search" v-model="query" class="form-control" name="player2" id="player2"
                                aria-describedby="nameHelp" required>
                        </div>
                        <div class="col-12">
                            <label for="" class="form-label">Winner</label>
                            <input type="text" v-model="winner" class="form-control" name="img" id="img" required>
                        </div>
                        <button type="submit" class="btn btn-primary m-2">Match Complete</button>
                    </form>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>

    <!-- ANCHOR Edit Game Modal -->
    <!-- <div class="modal fade" id="editGameModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create Match</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="handleSubmit" class="row">
                        <div class="col-12">
                            <label for="" class="form-label">Name</label>
                            <input type="text" v-model="editable.name" class="form-control" name="name" id="name"
                                aria-describedby="nameHelp" required>
                        </div>
                        <div class="col-12">
                            <label for="" class="form-label">Description</label>
                            <textarea type="text" v-model="editable.description" class="form-control" name="description"
                                id="description" maxlength="200" required> </textarea>
                        </div>
                        <div class="col-12">
                            <label for="" class="form-label">Rules</label>
                            <textarea type="text" v-model="editable.rules" class="form-control" name="rules" id="rules"
                                maxlength="200" required></textarea>
                        </div>
                        <div class="col-6">
                            <label for="" class="form-label">Image</label>
                            <input type="text" v-model="editable.img" class="form-control" name="img" id="img" required>
                        </div>
                        <div class="col-6">
                            <label for="" class="form-label">Second Image</label>
                            <input type="text" v-model="editable.coverImg" class="form-control" name="coverImg"
                                id="coverImg" required>
                        </div>
                        <div class="col-6">
                            <label for="" class="form-label">Min-Players</label>
                            <input type="number" v-model="editable.minPlayer" class="form-control" name="minPlayer"
                                id="minPlayer" required>
                        </div>
                        <div class="col-6">
                            <label for="" class="form-label">Max-Players</label>
                            <input type="number" v-model="editable.maxPlayer" class="form-control" name="maxPlayer"
                                id="maxPlayer" required>
                        </div>
                        <div class="col-12">
                            <label for="" class="form-label ">Category</label>
                            <select v-model="editable.type" name="" id="" class="form-control" required>
                                <option value="card game">Card Game</option>
                                <option value="board game">Board Game</option>
                                <option value="video game">Video Game</option>
                                <option value="sport">Sport</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary m-2">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    </div> -->
</template>


<script>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { AppState } from '../AppState.js';
import { gamesService } from '../services/GamesService.js';
import { matchesService } from '../services/MatchesService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
    setup() {
        const query = ref('')
        const router = useRouter()
        const route = useRoute()
        async function getById() {
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
            query,
            game: computed(() => AppState.activeGame),
            account: computed(() => AppState.account),
            async deleteGame() {
                try {
                    const check = await Pop.confirm("Would you like to remove this game")
                    if (!check) {
                        return
                    } else {
                        await gamesService.deleteGame(route.params.gameId)
                        router.push({ name: 'Games' })
                    }
                } catch (error) {
                    Pop.error(error)
                }
            },
            // NOTE not sure which of these are on the right track to creating a match.
            async handleSubmit(){
                try {
                    if(!AppState.account.id){
                        throw new Error('You must be signed in to create a match.')
                    }
                    //                                             v NOTE not sure what to put here.
                    const match = await matchesService.createMatch()
                    Pop.success('Match Created')
                } catch (error) {
                    logger.error('[Handling Submit]', error)
                    Pop.error(error)
                }
            }
            // async handleSubmit(){
            //     try {
            //         if(!AppState.account.id){
            //             throw new Error('You must be signed in to create a match.')
            //         }
            //         const form = event.target
            //         const newMatch = {
            //             playerIds: form.account.id.value && form.query.value,
            //             winnerId: form.winner.value
            //         }
            //         await matchesService.createMatch(newMatch)
            //         Pop.success('Match Created')
            //     } catch (error) {
            //         logger.error('[Handling Submit]', error)
            //         Pop.error(error)
            //     }
            // }
        }
    }
}
</script>


<style lang="scss" scoped>
.img {
    max-height: 35vh;
}
</style>