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
        name: 'Demo',
        component: () => import('@/views/Demo')
    }
]

const router = new Router({
    mode: 'history',
    routes
})

export default router