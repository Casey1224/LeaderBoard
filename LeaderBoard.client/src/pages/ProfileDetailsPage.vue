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



</template>
<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState';
import { profilesService } from '../services/ProfilesService';
import Pop from '../utils/Pop';


export default {
    setup() {
        const route = useRoute();
        async function getProfileById() {
            try {
                await profilesService.getProfileById(route.params.profileId)
            } catch (error) {
                Pop.error(error)

            }
        }
        onMounted(() => {
            getProfileById();
        })
        return {
            profile: computed(() => AppState.activeProfile),
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