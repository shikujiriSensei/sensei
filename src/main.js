import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./firebase.js"
import InfiniteLoading from "vue-infinite-loading"

createApp(App).use(router, InfiniteLoading).mount("#app")
