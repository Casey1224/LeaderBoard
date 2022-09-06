<template>
    <div class="game-card card rounded elevation-2 selectable container-fluid" @click="goTo">
        <div class="card-body d-flex justify-content-center">
            <img class="img-fluid rounded img" :src="game.img" alt="">
        </div>
        <div class="card-footer row">
            <h3 class="col-12 text-center capitalize">{{ game.name }}</h3>
            <p class="col-6">{{ game.minPlayer }} - {{ game.maxPlayer }} players</p>
            <p>{{ game.description }}</p>
            <p class="capitalize"><b>{{ game.type }}</b></p>
        </div>
    </div>
    

</template>


<script>
import { useRouter } from 'vue-router';

export default {
    props: { game: { type: Object, required: true } },
    setup(props) {
        const router = useRouter()

        return {

            goTo() {
                router.push({ name: 'GameDetails', params: { gameId: props.game._id } })
            },
        }
    }
}
</script>


<style lang="scss" scoped>
.capitalize{
    text-transform: capitalize;
}
.img{
    max-height: 45vh;
}
</style>