<template>
    <div class="wrapper">
        <div class="alert alert-success" v-if="showMessage">Playlist added successfully.</div>

        <form class="form" @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" name="name" id="name" required
                    v-model="name">
            </div>

            <div class="form-group">
                <button class="btn btn-primary"
                        v-bind:disabled="loading">{{ buttonText }}</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'addPlaylist',
  components: {},
  data() {
    return {
      name: '',
      loading: false,
      buttonText: 'Add song',
      showMessage: false,
    };
  },
  created() {
  },
  methods: {
    handleSubmit() {
      const playlistId = Math.random().toString(36).substring(5);

      this.loading = true;
      this.buttonText = 'Adding...';
      this.showMessage = false;

      this.$http.post('playlists', {
        id: playlistId,
        name: this.name,
        songs: [],
      }).then(() => {
        this.loading = false;
        this.showMessage = true;
        this.buttonText = 'Add playlist';
        this.name = '';
      });
    },
  },
};
</script>
