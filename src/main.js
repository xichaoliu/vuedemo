import Vue from 'vue';
import router from './router'

let vm = new Vue({
    el:'#app',
    router,
    components: {
    },
    template: `
        <div>
        <!-- <router-link :to="{ name: 'foo', params: { id: 123 } }">Go to Foo</router-link> -->
            <router-link to="/foo/123">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
            <router-view></router-view>
        </div>
    `
})