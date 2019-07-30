<template>
    <h1 class="my-4 font-weight-bold text-black">{{ pageTitle }}</h1>
</template>

<script>
export default {
  name: 'pageTitle',
  props: {
    pageTitle: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>
