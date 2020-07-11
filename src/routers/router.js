import Vue from 'vue'
import Router from 'vue-router'
import MovieRouter from "./movie"
import CinemaRouter from "./cinema"
import MineRouter from "./mine"

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  // base:"/miaomiao",
  routes: [
    MovieRouter,
    CinemaRouter,
    MineRouter,
    {
      path:"/*",
      redirect:"/movie"
    }
  ]
})
