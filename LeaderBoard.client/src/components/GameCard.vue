<template>
    <div class="card rounded elevation-2" @click="goTo">
        <div class="card-body">
            <img class="img-fluid rounded" :src="game.img" alt="">
        </div>
        <div class="card-footer">
            <h4>{{game.name}}</h4>
            <p>{{game.minPlayer}} - {{game.maxPlayer}} Players</p>
            <p>{{game.type}}</p>
            <p>{{game.description}}</p>
            <p>{{game.rules}}</p>
        </div>
    </div>
</template>


<script>
import { router } from '../router.js';

export default {
    props: { game: {type: Object, required: true}},
  setup(props) {

    return {
        goTo(){
            router.push({ name: 'GameDetails', params: {gameId: props.game.id}})
        }

    }
  }
}
</script>


<style lang="scss" scoped>
</style>