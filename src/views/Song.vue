<template>
    <div class="wrapper" v-if="song !== null">
        <h2 class="mb-5">{{ song.performer }} - {{ song.title }}</h2>

        <p><strong>Add to playlist:</strong></p>
        <template v-for="playlist in playlists">
            <div class="card card--light" v-if="playlist.id" :key="playlist.id">
                <div class="card-body">
                    <p class="mb-0">{{ playlist.name }}</p>

                    <button class="card-action btn btn-primary btn--icon-right"
                            v-if="!playlist.isAdded"
                            @click="addSongToPlaylist(playlist)">
                        Add <i class="fa fa-plus"></i>
                    </button>
                    <button class="card-action btn btn-danger btn--icon-right"
                            v-else
                            @click="removeSongFromPlaylist(playlist)">
                        Remove <i class="fa fa-close"></i>
                    </button>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
  name: 'song',
  components: {},
  data() {
    return {
      song: null,
      playlists: [],
    };
  },
  created() {
    this.$http.get(`songs/${this.$route.params.id}`)
      .then((res) => {
        this.song = res.data.song;

        this.$http.get('playlists')
          .then((playlistRes) => {
            playlistRes.data.playlists.forEach((playlist) => {
              const isAdded = playlist.songs.filter(song => song.songId === this.song.id);

              playlist.isAdded = isAdded.length > 0;
            });

            this.playlists = playlistRes.data.playlists;
          });
      });
  },
  methods: {
    addSongToPlaylist(playlist) {
      playlist.isAdded = true;

      this.$http.post(`playlists/${playlist.id}/songs`, {
        songId: this.song.id,
        position: 1,
      });
    },
    removeSongFromPlaylist(playlist) {
      playlist.isAdded = false;

      this.$http.delete(`playlists/${playlist.id}/songs/${this.song.id}`);
    },
  },
};
</script>
