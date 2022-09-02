<template>

    <div>
        <router-link :to="{ name: 'ProfileDetails', params: { profileId: profile?.id } }">
            <div class="selectable">
                <img class="rounded-pill" :src="profile.picture" alt="" :title="profile.name">
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