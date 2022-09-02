<template>

    <div>
        <router-link :to="{ name: 'ProfileDetails', params: { profileId: profile?.id } }">
            <div class=" d-flex justify-content-evenly my-3 ">
                <img class="rounded-pill selectable  elevation-2" :src="profile.picture" alt="" :title="profile.name">
            </div>

        </router-link>
    </div>

</template>
<script>


export default {
    props: {
        profile: { type: Object, required: true }
    },
    setup(props) {
        return {};
    },
};
</script>
<style>
</style>