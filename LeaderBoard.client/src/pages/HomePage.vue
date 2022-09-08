<template>
<body class="container-fluid">
  <div class="row middle  align-items-center justify-content-center">
      <div class="col-6 card  d-flex align-items-center text-center justify-content-around mb-5">
      <h1>Welcome to Trackr!</h1>

      <div v-if="user.isAuthenticated">
        <h4>Welcome {{user.name}}</h4>
      </div>
      <div v-else>
        <h4>Login in to continue</h4>
      </div>

      <button class="btn btn-outline-secondary col-6 m-2" @click="login" v-if="!user.isAuthenticated">
        LOGIN
      </button>
      <button class="btn btn-outline-primary col-6 m-2" @click="toGames" v-else>
      Continue to Games
      </button>
      </div>
  </div> 
</body>
</template>

<script>
  import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { AuthService } from "../services/AuthService";
import { useRouter } from "vue-router";

export default {
  name: 'Home',
  setup() {
    const router = useRouter()
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup();
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin });
      },
      toGames(){
        router.push({name: 'Games'})
      }
    }
  }
}
</script>

<style scoped lang="scss">

body{
    background-image: url(https://lh3.googleusercontent.com/EN9Fs_obpehxsm78L1JZVUsksxQ9nLd2d9BTiesICSVOhQ1exFbpuHs1Bzi9UdxExitnLSkJWUhR5_KYDe5iuR_5U3nT-AMtJKI6Aw=w600);
    background-image: url(https://64.media.tumblr.com/f59867ea0781a951f5b51712e91ba01a/f145147b69889cf3-5e/s640x960/043bb2008715b303727281615d6ead2d12a8712a.gifv);
    background-image: url(https://tuckerandmikesgnarlyextremeblog.files.wordpress.com/2017/03/9ca14e23ebbc1fc56d6ee16ef04c87f2_super-rare-8-bit-pepe-8-bit-space-background-gif_493-277.gif);
    background-position: center;
    background-size: cover;
   max-height: 92.8vh;
}
.card{
  min-height: 23vh;
  background-color: rgb(195, 195, 195);
}
.middle{
  min-height: 100vh;
}
</style>
