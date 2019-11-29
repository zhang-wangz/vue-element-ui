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
    {
      path: '/checkbox',
      name:"checkbox",
      component:()=>import("@/components/checkbox")
    },
    {
      path: '/input',
      name:"input",
      component:()=>import("@/components/input")
    },
    {
      path: '/inputnumber',
      name:"inputnumber",
      component:()=>import("@/components/inputnumber")
    },
    {
      path: '/select',
      name:"select",
      component:()=>import("@/components/select")
    },
    {
      path: '/switch',
      name:"switch",
      component:()=>import("@/components/switch")
    },
    {
      path: '/slider',
      name:"slider",
      component:()=>import("@/components/slider")
    },
    {
      path: '/timeanddatepicker',
      name:"timeanddatepicker",
      component:()=>import("@/components/timeanddatepicker")
    },

  ]
})
