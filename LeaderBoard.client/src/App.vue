<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
    <CreateGameForm/>
  </main>

</template>

<script>
import { computed } from 'vue';
import { AppState } from './AppState';
import CreateGameForm from './components/CreateGameForm.vue';

export default {
    name: "App",
    setup() {
        return {
            appState: computed(() => AppState)
        };
    },
    components: { CreateGameForm }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
main{
  overflow-y: hidden;
}
</style>
