<template>

    <section class="container">
        <div class="row">
            <div class="col-8 align-items-center">
                <div class="card  elevation-2 mx-2">
                    {{matches}}
                </div>
            </div>
        </div>

    </section>

</template>

<script>
export default {
    props: { matches: { type: Object, required: true } },
    setup(props) {
        return {

        }
    }

}

</script>

<style>

</style>