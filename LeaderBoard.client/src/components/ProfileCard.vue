<template>
    <div class="">
        <div class="">
            <div class="">
                <img class="rounded-pill" :src="profile.picture" alt="" :title="profile.name">


            </div>
        </div>

    </div>




</template>
<script>
import { Profile } from '../models/Profile';

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