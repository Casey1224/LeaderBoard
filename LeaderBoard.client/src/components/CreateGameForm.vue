<template>
    <div class="modal fade" id="createGameModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create Game</h5>
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
                                id="coverImg">
                        </div>
                        <div class="col-6">
                            <label for="" class="form-label">Min-Players</label>
                            <input type="num" v-model="editable.minPlayer" class="form-control" name="minPlayer"
                                id="minPlayer" required>
                        </div>
                        <div class="col-6">
                            <label for="" class="form-label">Max-Players</label>
                            <input type="num" v-model="editable.maxPlayer" class="form-control" name="maxPlayer"
                                id="maxPlayer" required>
                        </div>
                        <div class="col-6">
                            <label for="" class="form-label ">Category</label>
                            <select v-model="editable.category" name="" id="" class="form-control">
                                <option value="card game">Animals</option>
                                <option value="board game">Games</option>
                                <option value="video game">Food</option>
                                <option value="sport">Nature</option>
                                <option value="misc">Misc</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';

export default {
    setup() {
        const editable = ref({})
        return {
            editable,
            async handleSubmit() {
                try {

                } catch (error) {

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