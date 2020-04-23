import Vue from 'vue'
import VueRouter from 'vue-router'
import LatestSnippets from '@/views/LatestSnippets.vue'
import BestSnippets from '@/views/BestSnippets.vue'
import AddSnippet from '@/views/AddSnippet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LatestSnippets',
    component: LatestSnippets
  },
  {
    path: '/toplist',
    name: 'BestSnippets',
    component: BestSnippets
  },
  {
    path: '/add',
    name: 'AddSnippet',
    component: AddSnippet
  },
  {
    path: '*',
    component: LatestSnippets
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
