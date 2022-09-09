<template>
  <div class="container-fluid">
    <div class="row">
    <h1>{{match.game?.name}}</h1>
    <h3>Pick a winner!</h3>
    <div class="m-3 selectable" @click="editWinner(p.id)" v-for="p in match.players" :key="p.id">
      <div class="d-flex align-items-center" :match.players="p">
        <img class="p-2" :src="p.picture">
        <p class="p-2">{{p.name}}</p>
      </div>
    </div>
  </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { router } from '../router.js';
import { matchesService } from '../services/MatchesService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';


export default {
  setup() {
    const route = useRoute();
    async function getMatchById() {
      try {
        await matchesService.getMatchById(route.params.matchId)
      } catch (error) {
        Pop.error(error)
        logger.error(error)
      }
    }
    onMounted(() => {
      getMatchById()
    });
    return {
      match: computed(() => AppState.activeMatch),

      async editWinner(playerId) {
        try {
          let matchId = route.params.matchId
          let matchEdit = {
            winnerId: playerId
          }
          const yes = await Pop.confirm("Are you sure they won?")
          if (!yes) {
            return
          }
          await matchesService.editMatch(matchEdit, matchId)
          logger.log("gameId", AppState.activeMatch.gameId)
          router.push({ name: 'GameDetails', params: {gameId: AppState.activeMatch.gameId}})
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