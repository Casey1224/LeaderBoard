<template>
  <div class="container-fluid">
    <div class="row">
    </div>
  </div>
</template>


<script>
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';


export default {
  setup() {
    onMounted(() => {
      test()
    })
    return {
     match: computed (() => AppState.activeGame),
      test() {
        logger.log("[macth]")
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>