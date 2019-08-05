<template>
    <div class="wrapper">
        <p v-if="isLoading"><strong>loading songs...</strong></p>

        <ul class="list-group">
            <li class="list-group-item" :data-id="song.id" v-for="song in songs" :key="song.id">
                <div class="song">
<!--                    <div class="song__checkbox mr-3">-->
<!--                        <input type="checkbox">-->
<!--                    </div>-->
                    <div class="song__meta">
                        <p class="song__title">{{ song.title }}</p>
                        <p class="song__perfomer">{{ song.performer}}</p>
                    </div>

                    <div class="song__rating">
                        <rating :rating="song.rating" :id="song.id" />
                    </div>

                    <div class="song__action">
                        <router-link class="btn btn-secondary btn--icon-right card-action"
                                     :to="{ name: 'song', params: { id: song.id }}">
                            Details <i class="fa fa-chevron-right"></i>
                        </router-link>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Rating from '@/components/Rating.vue';

export default {
  name: 'songs',
  components: {
    rating: Rating,
  },
  data() {
    return {
      songs: [],
      playlists: [],
      selectedSongs: [],
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;
    this.$http.get('songs')
      .then((res) => {
        this.songs = res.data.songs;
        this.isLoading = false;

        this.$http.get('playlists')
          .then((playlistRes) => {
            this.playlists = playlistRes.data.playlists;
          });
      });
  },
};
</script>
