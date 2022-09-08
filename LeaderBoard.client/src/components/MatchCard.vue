<template>

    <section class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-8 ">
                <div class="card  elevation-2 mx-2">
                    <h3>{{matches.game.name}}</h3>
                    <div v-for="m in matches" :key="m.id">
                        {{matches.players.name}}
                    </div>

                </div>
            </div>
        </div>

    </section>

</template>

<script>
import { onMounted } from 'vue';
import { matchesService } from '../services/MatchesService';
import Pop from '../utils/Pop';

export default {
    props: { matches: { type: Object, required: true } },
    setup(props) {
        async function getMyMatches() {
            try {
                let match = await matchesService.getMyMatches()
                return match
            } catch (error) {
                Pop.error(error)
            }

        }
        onMounted(() => {
            getMyMatches()
        })
        return {

        }
    }

}

</script>

<style>

</style>