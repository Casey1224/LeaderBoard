<template>
    <div class="modal fade" id="createGameModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create Game</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="handleSubmit()" class="row">
                        <div class="col-12">
                            <label for="" class="form-label">Name</label>
                            <input type="text" v-model="editable.name" class="form-control" name="name" id="name"
                                aria-describedby="nameHelp" required   >
                        </div> 
                        <div class="col-12">
                            <label for="" class="form-label">Description</label>
                            <textarea type="text" v-model="editable.description" class="form-control" name="description"
                                id="description" maxlength="200" required ></textarea>
                        </div>
                        <div class="col-12">
                            <label for="" class="form-label">Rules</label>
                            <textarea type="text" v-model="editable.rules" class="form-control" name="rules" id="rules"
                                maxlength="200" required ></textarea>
                        </div>
                        <div class="col-6">
                            <label for="" class="form-label">Image</label>
                            <input type="text" v-model="editable.img" class="form-control" name="img" id="img" required >
                        </div>
                        <div class="col-6">
                            <label for="" class="form-label">Second Image</label>
                            <input type="text" v-model="editable.coverImg" class="form-control" name="coverImg"
                                id="coverImg" required >
                        </div>
                        <div class="col-6">
                            <label for="" class="form-label">Min-Players</label>
                            <input type="number" v-model="editable.minPlayer" class="form-control" name="minPlayer"
                                id="minPlayer" required >
                        </div>
                        <div class="col-6">
                            <label for="" class="form-label">Max-Players</label>
                            <input type="number" v-model="editable.maxPlayer" class="form-control" name="maxPlayer"
                                id="maxPlayer" required >
                        </div>
                        <div class="col-12">
                            <label for="" class="form-label ">Category</label>
                            <select v-model="editable.type" name="" id="" class="form-control" required >
                                <option value="card game">Card Game</option>
                                <option value="board game">Board Game</option>
                                <option value="video game">Video Game</option>
                                <option value="sport">Sport</option>
                            </select>

                        </div>
                        <div v-if="editable._id">
                            <button type="submit" class="btn btn-primary m-2" data-bs-dismiss="modal">Save Edit</button>
                        </div>
                        <div v-else>
                            <button type="submit" class="btn btn-primary m-2" data-bs-dismiss="modal">Create Game</button>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { gamesService } from '../services/GamesService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
    setup() {
        const route = useRoute()
        const editable = ref({})
        watchEffect(() => {
            if (!AppState.activeGame){return}
            editable.value = {...AppState.activeGame}
        })
        return {
            //TODO use props to auto fill form
            editable,
            async clearForm(){
            editable.value = {}
            },
            async handleSubmit() {
                try {
                    editable.value.gameId = route.params.gameId 
                    logger.log('Handling Game Form Submit', editable.value)
                    if(route.params.gameId){
                        await gamesService.editGame(editable.value)
                        Pop.toast('Edit Saved!')
                    } else {
                        await gamesService.createGame(editable.value)
                        Pop.toast('Game Created!')
                    }
                    editable.value = {}
                } catch (error) {
                    logger.error('[creating or editing car]', error)
                    Pop.error(error)
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>
textarea {
    resize: none;
}
</style>