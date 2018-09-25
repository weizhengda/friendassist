import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Login from '@/views/Login'
import Follow from '@/views/Follow'
import Share from '@/views/Share'
import Assist from '@/views/Assist'
import Reward from '@/views/Reward'
import End from '@/views/End'

Vue.use(Router)

export default new Router({
  model:'hash',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/share',
      name: 'Share',
      component: Share
    },
    {
      path: '/reward',
      name: 'Reward',
      component: Reward
    },
    {
      path: '/assist',
      name: 'Assist',
      component: Assist
    },
    {
      path: '/end',
      name: 'End',
      component: End
    }
  ]
})
