import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HeaderForm from '@/components/HeaderForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/HeaderForm',
      name: 'HeaderForm',
      component: HeaderForm
    }
  ]
})
