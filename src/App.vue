<template>
  <div id="nav">
    <NavBar />
  </div>
  <transition>
    <router-view />
  </transition>
  <Footer></Footer>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"

export default {
  components: {
    NavBar,
    Footer,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Hannotate SC", "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
body {
  margin: 0;
}
</style>
