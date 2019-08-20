import Vue from 'vue';
import router from './router';
import store from './store';

let vm = new Vue({
    el:'#app',
    router,
    store,
    components: {
    },
    template: `
        <div>
        <!-- <router-link :to="{ name: 'foo', params: { id: 123 } }">Go to Foo</router-link> -->
            <router-link to="/foo/123">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
            <button @click="$store.dispatch('increment')">按钮测试</button>
            <router-view></router-view>
        </div>
    `
})