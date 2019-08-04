<template>
    <div class="wrapper" v-if="playlist !== null">
        <h2 class="d-flex align-items-center mb-4">
            {{ playlist.name }} (<span class="text-black-50">#{{ playlist.id }}</span>)
        </h2>

        <ul class="list-group">
            <li class="list-group-item" :data-id="song.id" v-for="song in songs" :key="song.id">
                <div class="song">
                    <div class="song__meta">
                        <p class="song__title">{{ song.title }}</p>
                        <p class="song__perfomer">{{ song.performer}}</p>
                    </div>

                    <div class="song__rating">
                        <rating :rating="song.rating" :id="song.id" />
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
import Rating from '@/components/Rating.vue';

export default {
  name: 'playlist',
  components: {
    rating: Rating,
  },
  data() {
    return {
      playlist: null,
      playlistSongsIds: null,
      songs: [],
    };
  },
  created() {
    this.$http.get(`playlists/${this.$route.params.id}`)
      .then((res) => {
        this.playlist = res.data.playlist;
        this.playlistSongsIds = this.playlist.songs.map(song => song.songId);
      })
      .then(() => {
        this.$http.get('songs')
          .then((res) => {
            res.data.songs.forEach((song) => {
              this.playlistSongsIds.forEach((playlistSongsId) => {
                if (song.id === playlistSongsId) this.songs.push(song);
              });
            });
          });
      });
  },
};
</script>
