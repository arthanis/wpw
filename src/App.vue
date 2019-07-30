<template>
  <div id="app">
    <header class="header">
      <Navigation />
    </header>

    <main class="pb-5">
      <div class="container">
        <pageTitle :pageTitle="pageTitle" />
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/layout/Navigation.vue';
import PageTitle from '@/components/PageTitle.vue';
import router from './router';

export default {
  name: 'App',
  components: {
    Navigation,
    PageTitle,
  },
  data() {
    return {
      pageTitle: this.$route.meta.title,
    };
  },
  created() {
    router.beforeEach((to, from, next) => {
      this.pageTitle = to.meta.title;
      next();
    });
  },
};
</script>

<style lang="scss">
  @import 'assets/scss/styles';
</style>
