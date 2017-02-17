import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Yi from 'components/Yi'
import Seek from 'components/Seek'
import Find from 'components/Find'
import Car from 'components/Car'
import Mine from 'components/Mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Yi',
      name: 'Yi',
      component: Yi
    },
    {
      path: '/Seek',
      name: 'Seek',
      component: Seek
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find
    },
    {
      path: '/Car',
      name: 'Car',
      component: Car
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
