<template>

    <section class="container" v-if="match.game">
        <div class="row d-flex justify-content-center">
            <div class="col-8 ">
                <div class="card my-3 elevation-2 mx-2">
                    <h3 class="  text-center">{{match.game.name}}</h3>
                    <img class="rounded" :src="match.game.coverImg" alt="">
                    <div v-for="p in match.players" :key="p.id">
                        {{p.name}}
                    </div>

                </div>
            </div>
        </div>

    </section>

</template>

<script>
import { onMounted } from 'vue';
import { matchesService } from '../services/MatchesService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {
    props: { match: { type: Object, required: true } },
    setup(props) {

        return {

        }
    }

}

</script>

<style>

</style>