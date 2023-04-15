import {createRouter, createWebHashHistory } from "vue-router"

const routes = [
    { path: '/',component: () => import('../views/Home.vue')},
    { path: '/signin',component: () => import('../views/Sign.vue')},
    { path: '/signup',  component: () => import('../views/Sign.vue') },
    { path: '/visualize', component: () => import('../views/VisualizeAgenda.vue') },
    { path: '/about', component: () => import('../views/AboutUs.vue') },
    { path: '/contact', component: () => import('../views/ContactUs.vue') },
    { path: '/create', component: () => import('../views/Create&modifyAgenda.vue') },
    { path: '/modify', component: () => import('../views/Create&modifyAgenda.vue') },
  ]
  
const router = createRouter({
history: createWebHashHistory(),
routes, 
})

export default router