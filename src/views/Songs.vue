<template>
    <div class="wrapper">
        <ul class="list-group">
            <li class="list-group-item" v-for="song in songs" :key="song.id">
                <div class="mb-0">
                    <p class="mb-0"><strong>{{ song.performer}}</strong> - {{ song.title }}</p>
                    <p class="mb-0"><strong>#{{ song.id }}</strong></p>
                    <div class="d-flex">
                        <div><strong>Rating:</strong></div>
                        <div class="d-flex align-items-center text-dark pl-1">
                            <i class="fa fa-star" v-for="i in song.rating" :key="i"></i>
                        </div>
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
