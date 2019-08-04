<template>
    <div class="wrapper">
        <ul class="list-group">
            <li class="list-group-item" v-for="song in songs" :key="song.id">
                <div class="song">
                    <div class="song__meta">
                        <p class="song__title">{{ song.title }}</p>
                        <p class="song__perfomer">{{ song.performer}}</p>
                    </div>

                    <div class="song__rating">
                        <i class="fa fa-star" v-for="i in song.rating" :key="i"></i>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'songs',
  components: {},
  data() {
    return {
      songs: [],
    };
  },
  created() {
    this.$http.get('songs')
      .then((res) => {
        this.songs = res.data.songs;
      });
  },
};
</script>
