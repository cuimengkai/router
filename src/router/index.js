import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Url from '@/components/Url'
import Parent from '@/components/Parent'
import ChildOne from '@/components/ChildOne'
import ChildTwo from '@/components/ChildTwo'
import Params from '@/components/Params'
import ParamsOne from '@/components/ParamsOne'
import ParamsTwo from '@/components/ParamsTwo'
import Alias from '@/components/Alias'
import AliasParams from '@/components/AliasParams'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Url',
      name: 'Url',
      component: Url
    },
    {
      path: '/Parent',
      component: Parent,
      children: [{
          path: '/',
          name: 'Parent',
        }, {
          path: 'ChildOne',
          name: 'ChildOne',
          component: ChildOne

        },
        {
          path: 'ChildTwo',
          name: 'ChildTwo',
          component: ChildTwo
        }
      ]
    },
    {
      path: '/Params',
      component: Params,
      children: [{
          path: '/',
          name: 'Params'
        },
        {
          path: 'ParamsOne',
          name: 'ParamsOne',
          component: ParamsOne
        },
        {
          path: 'ParamsTwo/:to/:from',
          name: 'ParamsTwo',
          component: ParamsTwo
        }
      ]
    },
    {
      path: '/Redirect',
      name: 'Redirect',
      redirect: '/Home'
    },
    {
      path: '/Alias',
      name: 'Alias',
      component: Alias,
      alias: '/AliasShow'
    },
    {
      path: '/AliasParams/:to/:from',
      name: 'AliasParamsShow',
      component: AliasParams,
      alias: '/AliasParamsShow/:to/:from'
    },
    {
      path: '*',
      component: Error
    }
  ]
})
