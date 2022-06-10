import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/Home.vue"
import PostView from "../views/Home.vue"
import ListView from "../views/List.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/list",
    name: "List",
    component: ListView,
  },
  {
    path: "/post",
    name: "Post",
    component: PostView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
