<template>
    <div class="wrapper">
        <div class="d-flex mb-5">
            <button class="btn btn-primary">Add playlist</button>
        </div>

        <div class="playlists">
            <template v-for="playlist in playlists">
                <div class="card card--light" v-if="playlist.id" :key="playlist.id">
                    <div class="card-body">
                        <p class="card-title"><strong>{{ playlist.name }}</strong></p>
                        <p class="card-details">{{ playlist.songs.length }} song(s)</p>

                        <router-link class="btn btn-secondary btn--icon-right card-action"
                                    :to="{ name: 'playlist', params: { id: playlist.id }}">
                            Details <i class="fa fa-chevron-right"></i>
                        </router-link>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>


<script>
export default {
  name: 'playlists',
  components: {},
  data() {
    return {
      playlists: [],
    };
  },
  created() {
    this.$http.get('playlists')
      .then((res) => {
        this.playlists = res.data.playlists;
      });
  },
};
</script>
