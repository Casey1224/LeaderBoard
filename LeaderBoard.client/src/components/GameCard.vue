<template>
    <div class="card rounded elevation-2">
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
export default {
  setup() {

    return {

    }
  }
}
</script>


<style lang="scss" scoped>
</style>