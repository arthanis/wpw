<template>
    <div class="wrapper" v-if="playlist !== null">
        <h2 class="d-flex align-items-center">
            {{ playlist.name }} (<span class="mr-2 text-black-50">#{{ playlist.id }}</span>)
        </h2>

        <ul class="list-unstyled">
            <li v-for="song in playlist.songs" :key="song.id">
                <strong>{{ song.performer}}</strong> - {{ song.title }}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
  name: 'playlist',
  components: {},
  data() {
    return {
      playlist: null,
    };
  },
  created() {
    this.$http.get(`playlists/${this.$route.params.id}`)
      .then((res) => {
        this.playlist = res.data.playlist;
      });
  },
};
</script>
