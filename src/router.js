import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Songs from './views/Songs.vue';
import Playlists from './views/Playlists.vue';
import Playlist from './views/Playlist.vue';
import AddPlaylist from './views/AddPlaylist.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Home',
      },
      component: Home,
    },
    {
      path: '/songs',
      name: 'songs',
      meta: {
        title: 'Songs',
      },
      component: Songs,
    },
    {
      path: '/playlists',
      name: 'playlists',
      meta: {
        title: 'Playlists',
      },
      component: Playlists,
    },
    {
      path: '/playlists/add',
      name: 'addPlaylist',
      meta: {
        title: 'Add playlist',
      },
      component: AddPlaylist,
    },
    {
      path: '/playlist/:id',
      name: 'playlist',
      meta: {
        title: 'Playlist profile',
      },
      component: Playlist,
    },
  ],
  linkExactActiveClass: 'active',
});

export default router;
