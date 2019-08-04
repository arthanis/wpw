<template>
    <div class="rating">
        <div class="rating__stars">
            <i class="fa fa-star-o rating__item"
               v-for="i in 5"
               :key="i"
               @click="onRating(i)"
            ></i>
        </div>
        <div class="rating__stars rating__stars--active" :style="{ width: ratingWidth + 'px' }">
            <i class="fa fa-star" v-for="i in 5" :key="i"></i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Rating',
  props: {
    rating: {
      type: Number,
    },
    id: {
      type: String,
    },
  },
  data() {
    return {
      ratingWidth: this.rating / 5 * 100,
    };
  },
  methods: {
    onRating(number) {
      this.ratingWidth = number / 5 * 100;
      this.$http.patch(`songs/${this.id}`, {
        rating: number,
      });
    },
  },
};
</script>
