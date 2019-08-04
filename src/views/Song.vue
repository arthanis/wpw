<template>
    <div class="wrapper" v-if="song !== null">
        <h2 class="mb-5">{{ song.performer }} - {{ song.title }}</h2>

        <p><strong>Add to playlist:</strong></p>
        <template v-for="playlist in playlists">
            <div class="card card--light" v-if="playlist.id" :key="playlist.id">
                <div class="card-body">
                    <p class="mb-0">{{ playlist.name }}</p>

                    <button class="card-action btn btn-primary btn--icon-right"
                            @click="addSongToPlaylist(playlist.id)">
                        Add <i class="fa fa-plus"></i>
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
      });

    this.$http.get('playlists')
      .then((res) => {
        this.playlists = res.data.playlists;
      });
  },
  methods: {
    addSongToPlaylist(playlistId) {
      this.$http.post(`playlists/${playlistId}/songs`, {
        songId: this.song.id,
        position: 1,
      });
    },
  },
};
</script>
