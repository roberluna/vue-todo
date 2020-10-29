import { createRouter, createWebHashHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import TodoList from '@/components/TodoList.vue'
import TodoCreate from '@/components/TodoCreate.vue'
import TodoEdit from '@/components/TodoEdit.vue'
import TodoShow from '@/components/TodoShow.vue'

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/create',
    name: 'TodoCreate',
    component: TodoCreate
  },
  {
    path: '/edit/:id',
    name: 'TodoEdit',
    component: TodoEdit
  },
  {
    path: '/show/:id',
    name: 'TodoShow',
    component: TodoShow
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active" 
})

export default router
