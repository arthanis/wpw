<template>
    <h1 class="font-weight-bold text-black">{{ pageTitle }}</h1>
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
