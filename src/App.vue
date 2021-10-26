<template>
  <div id="app">
    <browse />
  </div>
</template>

<script>
import Browse from "./views/Browse";

export default {
  name: 'App',
  components: {
    Browse
  }
}
</script>

<style>
@font-face {
  font-family: "plex-sans";
  src: local("IBMPlexSans-Regular"), url("../public/fonts/IBMPlexSans-Regular.woff2") format("woff2");
}
body {
  margin: 0;
}

#app {
  font-family: "plex-sans";
}
</style>
