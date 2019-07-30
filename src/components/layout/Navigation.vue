<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container d-flex">
            <router-link class="navbar-brand mr-5" to="/">
                <a class="nav-link font-weight-bold">WPW</a>
            </router-link>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <router-link tag="li" class="nav-item" to="/">
                        <a class="nav-link">Home</a>
                    </router-link>

                    <router-link tag="li" class="nav-item" to="/songs">
                        <a class="nav-link">Songs</a>
                    </router-link>

                    <router-link tag="li" class="nav-item" to="/playlists">
                        <a class="nav-link">Playlists</a>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'navigation',
  components: {},
};
</script>
