import Vue from 'vue';
import Router from "vue-router";
import Foo from '../pages/foo';
import Bar from '../pages/bar/Bar.vue';
Vue.use(Router);

const routes = [
    { 
        path: '/foo/:id', 
        name: 'foo',
        component: Foo , 
        props: true
    },
    { 
        path: '/bar', 
        name: 'bar',
        component: Bar 
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