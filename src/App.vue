<template>
  <div id="app">
  <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400i|IBM+Plex+Sans+Condensed|IBM+Plex+Sans:700i|IBM+Plex+Serif:400i&display=swap" rel="stylesheet">
    <Navbar />
    <div >
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-smooth: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
  background: var(--fondo);
  width: 100%;
  overflow: auto;
  overflow-x: hidden;
}
</style>
