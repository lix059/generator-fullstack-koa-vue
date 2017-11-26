import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import (/* webpackChunkName: "Home" */ '@/components/Home')
const TimeEntries = () => import (/* webpackChunkName: "components" */ '@/components/TimeEntries.vue')
const LogTime = () => import (/* webpackChunkName: "LogTime" */ '@/components/LogTime.vue')
const Doctors = () => import (/* webpackChunkName: "Doctors" */ '@/components/Doctors.vue')
const TodoList = () => import (/* webpackChunkName: "TodoList" */ '@/components/TodoList.vue')
const NotFound = () => import (/* webpackChunkName: "NotFound" */ '@/components/404.vue')


Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        component: Home
    },{
        path: '/home',
        component: Home
    },{
         path: '/time-entries',
         component: TimeEntries,
         children: [{
            path: 'log-time',
            component: LogTime
         }]
    },{
      path: '/doctors',
      component : Doctors
    },{
      path: '/todoList',
      component: TodoList
    },{
      path : '*',
      component : NotFound
    }]
})
