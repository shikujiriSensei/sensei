<template>
  <div id="nav">
    <NavBar />
    <router-view />
  </div>
  <router-view />
</template>

<script>
import NavBar from "@/components/NavBar.vue"

export default {
  components: {
    NavBar,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
}
body {
  margin: 0;
}
</style>