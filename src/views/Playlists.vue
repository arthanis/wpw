<template>
    <div class="row">
        <div class="col-lg-6" v-for="playlist in playlists" :key="playlist.id">
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title"><strong>{{ playlist.name }}</strong></h5>

                    <ul v-if="playlist.songs">
                        <li v-for="song in playlist.songs" :key="song.songId">
                            <strong>ID: </strong> {{ song.songId }} <br>
                            <strong>Position: </strong> {{ song.position }}
                        </li>
                    </ul>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
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
