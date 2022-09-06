<template>

    <div>
        <router-link :to="{ name: 'ProfileDetails', params: { profileId: profile?.id } }">
            <div class=" d-flex justify-content-evenly my-3">
                <img class="blah rounded-pill selectable  elevation-2 img-fluid" :src="profile.picture" alt=""
                    :title="profile.name">
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
.blah {
    max-width: 95px;
    max-height: 95px;
    min-height: 95px;
    min-width: 95px;
}
</style>