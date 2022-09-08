<template>
  <div class="container-fluid">
    <div class="row">
      MATCH DETAILS PAGE 
    </div>
  </div>
</template>


<script>
import { onMounted } from 'vue';
import { logger } from '../utils/Logger.js';

export default {
  setup() {
    function refresh(){
      logger.log('[refreshing page]')
      location.reload()
    }
    onMounted(() => {
      // refresh();
    })
    return {

    }
  }
}
</script>


<style lang="scss" scoped>
</style>