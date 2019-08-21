import Vue from 'vue';
import Router from "vue-router";
// import Foo from '../pages/foo';
import Bar from '../pages/Bar/Bar.vue';
Vue.use(Router);

const routes = [
    { 
        path: '/foo/:id', 
        name: 'foo',
        component: () => import('@/pages/foo') , 
        props: true
    },
    { 
        path: '/bar', 
        name: 'bar',
        component: () => import('@/pages/Bar/Bar.vue') 
    },
    // {
    //     path: '/*',
    //     redirect: { name: 'bar' }
    // }
]

const router = new Router({
    mode: 'history',
    routes
})

export default router;