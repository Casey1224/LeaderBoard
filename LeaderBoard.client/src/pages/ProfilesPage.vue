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
export default {
    setup() {
        return {};
    },
};
</script>
<style>
</style>