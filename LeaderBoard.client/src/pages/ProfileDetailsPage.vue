<template>

    <div class="container-fluid bg-dark text-light">
        <div class="row">
            <div class="col-12">
                <img class="img-fluid" :src="Profile.coverImg" alt="">
            </div>
            <div class="col-4">
                <div>
                    <img :src="Profile.picture" alt="">
                </div>
                <div>
                    <p><b>{{ Profile.name }}</b></p>
                </div>
                <div>
                    <p>{{ Profile.bio }}</p>
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
</style>