<template>
    <div class="game-card card rounded elevation-2 selectable" @click="goTo">
        <div class="card-body">
            <img class="img-fluid rounded" :src="game.img" alt="">
        </div>
        <div class="card-footer">
            <h4>{{ game.name }}</h4>
            <p>{{ game.minPlayer }} - {{ game.maxPlayer }} players</p>
            <p>{{ game.description }}</p>
            <p>Rules:{{ game.rules }}</p>
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
</style>