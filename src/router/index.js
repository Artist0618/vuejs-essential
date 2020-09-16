import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '*',
        redirect: '/'
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home'),
        meta:{keepAlive:true}
    },
    {
        path: '/add',
        name: 'Add',
        component: () => import('@/views/Add')
    },
    {
        path: '/edit/:id',
        name: 'Edit',
        component: () => import('@/views/Edit')
    },
]

const router = new Router({
    mode: 'history',
    routes
})

export default router