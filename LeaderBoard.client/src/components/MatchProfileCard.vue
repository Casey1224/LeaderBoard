<template>

   
        <div class="justify-content-evenly my-3">
            <img class="blah rounded-pill selectable  elevation-2 img-fluid" :src="profile.picture" alt=""
                :title="profile.name" @click="selectPlayers">
                <!-- <p>{{profile.name}}</p> -->
        </div>
 

</template>
<script>
import { ref } from 'vue';
import { matchesService } from '../services/MatchesService.js';
import { logger } from '../utils/Logger.js';



export default {
    props: {
        profile: { type: Object, required: true }
    },
    setup(props) {
        const newMatch = ref({playerIds: []}) //backend sending all the player ids to the server POST
        const selectedPlayers = ref([]) //frontend sending the players to the "match page" 
        return {
            newMatch,
            async selectPlayers(){

                logger.log('creating new match', newMatch.value)
                // await matchesService.createMatch(newMatch.value)
            }
        }
    }
}
</script>
<style>
.blah {
    max-width: 95px;
    max-height: 95px;
    min-height: 95px;
    min-width: 95px;
}
</style>