import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/UserList.vue'
import AddUser from '../views/AddUser.vue'
import EditUser from '../views/EditUser.vue'

const routes = [
  { path: '/', component: UserList },
  { path: '/add', component: AddUser },
  { path: '/edit/:id', component: EditUser },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router