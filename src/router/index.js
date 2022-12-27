import { createRouter, createWebHistory } from 'vue-router'
import mainGenerator from '../views/main-generator.vue'
import FavePage from '../views/fave-page.vue'
import SavedPassWordsPage from '../views/Saved-page.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: mainGenerator
  },
  {
    path:'/faves',
    name : "Faveourits",
    component :FavePage,
  },
  {
    path:'/saved',
    name : "Saves",
    component:SavedPassWordsPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
