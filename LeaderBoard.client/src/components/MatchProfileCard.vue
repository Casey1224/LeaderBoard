<template>
    <div class="col-6 d-flex align-items-center p-2">
        <img class="blah rounded-pill selectable elevation-2 img-fluid" :src="profile.picture" alt=""
            :title="profile.name" >
        <p class="p-3">{{profile.name}}</p>
    </div>
</template>
<script>




export default {
    props: {
        profile: { type: Object, required: true }
    },
    setup() {

        return {
            
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