<template>
    <div class="modal fade" id="createGameModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create Game</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="col-6">
                            <label for="" class="form-label">Name</label>
                            <input type="text" v-model="editable.title" class="form-control" name="name" id="name" aria-describedby="nameHelp">
                        </div>
                        <div class="col-6">
                            <label for="" class="form-label">Description</label>
                            <input type="text" v-model="editable.title" class="form-control" name="description" id="description">
                        </div>
                        <div class="col-3">
                            <label for="" class="form-label">Image</label>
                            <input type="text" v-model="editable.title" class="form-control" name="img" id="img">
                        </div>
                        <div class="col-3">
                            <label for="" class="form-label">Second Image</label>
                            <input type="text" v-model="editable.title" class="form-control" name="coverImg" id="coverImg">
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
export default {
    setup() {

        return {

        }
    }
}
</script>


<style lang="scss" scoped>
</style>