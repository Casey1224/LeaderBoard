<template>
    <div class="container-fluid">
        <div class="text-center">
            <button class="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#createMatchModal">Start
                Match</button>
        </div>
        <div class="row justify-content-center">
            <div class="card rounded elevation-2 col-11" @click="goTo">
                <div class="card-body justify-content-center d-flex">
                    <img class="img-fluid rounded img" :src="game.img" alt="">
                </div>
                <div class="card-footer">
                    <h1 class="text-center">{{ game.name }}</h1>
                    <p>{{ game.minPlayer }} - {{ game.maxPlayer }} Players</p>
                    <p>{{ game.type }}</p>
                    <p>{{ game.description }}</p>
                    <p>{{ game.rules }}</p>
                </div>
                <div v-if="game.creatorId == account._id">
                    <i class="mdi mdi-delete-forever delete-button selectable" @click="deleteGame"></i>
                </div>
                <div v-if="game.creatorId == account._id">
                    <button class="btn btn-outline-secondary btn-sm" data-bs-toggle="modal"
                        data-bs-target="#createGameModal">Edit Account</button>
                </div>
            </div>
        </div>
    </div>

    <!-- ANCHOR Create Match Modal -->
    <div class="modal fade" id="createMatchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create Match</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <SearchForm />
                    <div class="row">
                        <div class="col-md-6" @click="selectPlayers(p)" v-for="p in profiles" :key="p.id">
                            <MatchProfileCard :profile="p" />
                        </div>
                        <div v-for=" p in selectedPlayers" :key="p.id">
                            <img class="blah rounded-pill  elevation-2 img-fluid" :src="p.picture"
                                alt="" :title="p.name">
                                
                        </div>
                        <button class="btn btn-outline-secondary" @click="startMatch">
                            Start Match
                        </button>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>


</template>


<script>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { AppState } from '../AppState.js';
import { gamesService } from '../services/GamesService.js';
import { matchesService } from '../services/MatchesService.js';
import { profilesService } from '../services/ProfilesService';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import SearchForm from '../components/SearchForm.vue';
import MatchProfileCard from '../components/MatchProfileCard.vue';
// import { hide } from '@popperjs/core/index.js';


export default {
    setup() {
        const newMatch = ref({ playerIds: [] }); //backend sending all the player ids to the server POST
        const selectedPlayers = ref([]); //frontend sending the players to the "match page" 
        const query = ref("");
        const router = useRouter();
        const route = useRoute();
        async function getById() {
            try {
                await gamesService.getById(route.params.gameId);
            }
            catch (error) {
                Pop.error("Getting Game By Id", error);
                logger.error(error);
            }
        }
        onMounted(() => {
            getById();
        });
        return {
            query,
            newMatch,
            selectedPlayers,
            game: computed(() => AppState.activeGame),
            account: computed(() => AppState.account),
            profiles: computed(() => AppState.profiles),
            activeMatch: computed(() => AppState.activeMatch),

            async startMatch(){
                try {
                    debugger
                    newMatch.value.playerIds.push(this.account.id)
                    logger.log('[new match with account id]', newMatch.value )
                    let match = {
                        gameId: route.params.gameId,
                        playerIds: newMatch.value.playerIds
                    }
                    await matchesService.createMatch(match)
                    logger.log("[this match id]", AppState.activeMatch.id)
                    // let modal = document.getElementById("createMatchModal")
                    // modal.hide()
                    router.push({ name: 'MatchDetails', params: {matchId: AppState.activeMatch.id} })
                } catch (error) {
                    Pop.error('Starting Match',error)
                }
            },
            async selectPlayers(profile) {
                try {
                if(newMatch.value.playerIds.includes(profile.id)){
                return 
               }
                newMatch.value.playerIds.push(profile.id)
                selectedPlayers.value.push(profile)
                logger.log("[NEW MATCH]", newMatch.value)
                logger.log("[SELECTED PLAYERS]", selectedPlayers.value)
                } catch (error) {
                    Pop.error(error)
                }
              
                //TODO Pop confirm to add player
                //TODO Second page of modal that as the selected player as well as account 
            },
            async deleteGame() {
                try {
                    const check = await Pop.confirm("Would you like to remove this game");
                    if (!check) {
                        return;
                    }
                    else {
                        await gamesService.deleteGame(route.params.gameId);
                        router.push({ name: "Games" });
                    }
                }
                catch (error) {
                    Pop.error(error);
                }
            },
            async searchProfile() {
                try {
                    logger.log("searching Profiles");
                    const player = await profilesService.getProfileBySearch(query.value);
                    debugger;
                    query.value = "";
                }
                catch (error) {
                    Pop.error(error);
                }
            },
            async handleSubmit() {
                try {
                    if (!AppState.account.id) {
                        throw new Error("You must be signed in to create a match.");
                    }
                    //                                             v NOTE not sure what to put here.
                    let newMatch = {
                        gameId: AppState.activeGame.id
                    };
                    debugger;
                    const match = await matchesService.createMatch(newMatch);
                    Pop.success("Match Created");
                    return match;
                }
                catch (error) {
                    logger.error("[Handling Submit]", error);
                    Pop.error(error);
                }
            }
        };
    },
    components: { SearchForm, MatchProfileCard }
}
</script>


<style lang="scss" scoped>
.img {
    max-height: 35vh;
}
</style>