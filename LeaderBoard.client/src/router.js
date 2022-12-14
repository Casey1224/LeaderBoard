import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard, authSettled } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/games',
    name: 'Games',
    component: loadPage('GamesPage')
  },
  {
    path: '/games/:gameId',
    name: 'GameDetails',
    component: loadPage('GameDetailsPage')
  },
  {
    path: '/profiles',
    name: 'Profiles',
    component: loadPage('ProfilesPage')
  },
  {
    path: '/match/:matchId',
    name: 'MatchDetails',
    component: loadPage('MatchDetailsPage')
  },
  {
    path: '/profiles/:profileId',
    name: 'ProfileDetails',
    component: loadPage('ProfileDetailsPage'),
    // beforeEnter: authSettled
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
