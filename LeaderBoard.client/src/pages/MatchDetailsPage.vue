<template>
  <div class="container-fluid">
    <div class="row">
      <h1>{{match.game.name}}</h1>
      <h3>Pick a winner!</h3>
      <!-- <img :src="match.game.coverImg" alt="gameImg"> -->
      <div class="m-3 selectable" @click="editWinner(p.id, match.id)" v-for="p in match.players" :key="p.id">
        <div :match.players="p">
          <p>{{p.name}}</p>
          <img :src="p.picture">
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { matchesService } from '../services/MatchesService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';


export default {
  setup() {
    function test() {
      logger.log("[game]", AppState.activeMatch)
    }
    onMounted(() => {
      test()
    });
    return {
      match: computed(() => AppState.activeMatch),
      async editWinner(winnerId, matchId) {
        try { 
          
          let editData = {
            winnerId: winnerId,
            matchId: matchId
          }
          logger.log("[editData]", editData)
          const yes = await Pop.confirm("Are you sure they won?")
          if(!yes){
            return
          }
          await matchesService.editMatch(editData)
          // await matchesService.editMatch(winnerId, matchId)
        } catch (error) {
          Pop.error
          logger.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>