<template>
  <div>
    <p>home content...</p>

    <ul class="list-group">
      <li class="list-group-item" v-for="song in songs" :key="song.id">
        <p class="mb-0"><strong>#{{ song.id }}</strong> {{ song.performer}} - {{ song.title }}</p>
        <p class="text-info">Rating: {{ song.rating }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
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
