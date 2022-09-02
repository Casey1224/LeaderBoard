<template>
    <div class="game-card card rounded elevation-2">
        <div class="card-body selectable" @click="goTo">
            <img class="img-fluid rounded" :src="game.img" alt="">
        </div>
        <div class="card-footer">
            <h4>{{ game.name }}</h4>
            <p>{{ game.minPlayer }} - {{ game.maxPlayer }} players</p>
            <p>{{ game.description }}</p>
            <p>Rules:{{ game.rules }}</p>
            <p><b>{{ game.type }}</b></p>
            <div>
            <!-- <div v-if="game.creatorId == account._id">  -->
                <i class="mdi mdi-delete-forever delete-button selectable" @click="deleteGame"></i>
            </div>
        </div>
    </div>
    

</template>


<script>
import { useRoute, useRouter } from 'vue-router';
import { gamesService } from '../services/GamesService.js';
import Pop from '../utils/Pop.js';
export default {
    props: { game: { type: Object, required: true } },
    setup(props) {
        const router = useRouter()
        const route = useRoute()

        return {
            goTo() {
                router.push({ name: 'GameDetails', params: { gameId: props.game._id } })
            },
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
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>