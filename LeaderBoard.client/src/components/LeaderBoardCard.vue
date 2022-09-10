<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 leader"> </div>
            
        </div>
    </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';

export default {
  setup() {
    return {
        profile: computed(() => AppState.profiles),
        account: computed(() => AppState.account),
        
    }
  }
}
</script>


<style lang="scss" scoped>
    .leader{ 
        background-color: #A8A8A8;
    }
</style> 