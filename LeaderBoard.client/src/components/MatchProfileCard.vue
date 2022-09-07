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
import { profilesService } from '../services/ProfilesService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';



export default {
    props: {
        profile: { type: Object, required: true }
    },
    setup(props) {
        const newMatch = ref({ playerIds: [] }) //backend sending all the player ids to the server POST
        const selectedPlayers = ref([]) //frontend sending the players to the "match page" 
        return {
            newMatch,
            selectedPlayers,
            async selectPlayers() {
                let profileId = props.profile.id
                newMatch.value.playerIds.push(profileId)
                selectedPlayers.value.push(profileId)
                logger.log("[NEW MATCH]", newMatch.value)
                logger.log("[SELECTED PLAYERS]", selectedPlayers.value)



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