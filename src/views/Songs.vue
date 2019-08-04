<template>
    <div class="wrapper">
        <ul class="list-group">
            <li class="list-group-item" :data-id="song.id" v-for="song in songs" :key="song.id">
                <div class="song">
                    <div class="song__meta">
                        <p class="song__title">{{ song.title }}</p>
                        <p class="song__perfomer">{{ song.performer}}</p>
                    </div>

                    <div class="song__rating">
                        <rating :rating="song.rating" :id="song.id" />
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
