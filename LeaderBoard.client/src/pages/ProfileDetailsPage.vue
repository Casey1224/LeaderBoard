<template>

    <div class="container-fluid bg-dark text-light">
        <div class="row">
            <div class="col-12">
                <img class="img-fluid pic" :src="profile.coverImg" alt="">
            </div>
            <div class="col-12">
                <div class="d-flex justify-content-center my-5">
                    <img class="prflpic img-fluid " :src="profile.picture" alt="">
                </div>
                <div>
                    <p><b>{{ profile.name }}</b></p>
                </div>
                <div>
                    <p>{{ profile.bio }}</p>
                </div>
                <div>
                    <button class="btn btn-info">Add Friend</button>
                </div>

            </div>
        </div>
    </div>
    <div v-for="m in matches" :key="m.id">
        <MatchCard :match="m" />


    </div>



</template>
<script>
import { computed } from '@vue/reactivity';
import { onMounted, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState';
import { matchesService } from '../services/MatchesService';
import { profilesService } from '../services/ProfilesService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';


export default {
    setup() {
        // get matches...make get request api/matches
        const route = useRoute();
        async function getProfileById() {
            try {
                await profilesService.getProfileById(route.params.profileId)
            } catch (error) {
                Pop.error(error)
            }
        }
        async function getProfileMatches() {
            if (AppState.account.id) {
                try {
                    await matchesService.getProfileMatches(route.params.profileId)
                } catch (error) {
                    logger.log(error)
                    Pop.error(error)
                }
            }
        }

        watchEffect(() => {
            AppState.account.id
            getProfileMatches()
        })

        onMounted(() => {
            getProfileById();
            getProfileMatches()
        })
        return {
            route,
            profile: computed(() => AppState.activeProfile),
            account: computed(() => AppState.account),
            matches: computed(() => AppState.profileMatches)
        };
    },
};
</script>
<style >
.pic {
    min-width: 100%;
    max-height: 40vh;
}

.prflpic {
    max-width: 250px;
    max-height: 250px;
    min-width: 250px;
    min-height: 250px;
    border-radius: 50%;
}
</style>