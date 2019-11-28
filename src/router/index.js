import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/layout',
      name:"layout",
      component:()=>import("@/components/layout")
    },
    {
      path: '/container',
      name:"container",
      component:()=>import("@/components/container")
    },
    {
      path: '/icon',
      name:"icon",
      component:()=>import("@/components/icon")
    },
    {
      path: '/button',
      name:"button",
      component:()=>import("@/components/button")
    },
    {
      path: '/link',
      name:"link",
      component:()=>import("@/components/link")
    },
    {
      path: '/radio',
      name:"radio",
      component:()=>import("@/components/radio")
    },

  ]
})
