import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../components/UserList.vue'
import UserDetail from '../components/UserDetail.vue'
import CreateUser from '../components/CreateUser.vue'

const routes = [
  { path: '/', component: UserList },
  { path: '/user/:id', component: UserDetail },
  { path: '/create', component: CreateUser }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
