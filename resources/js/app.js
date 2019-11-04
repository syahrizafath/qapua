/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './components/admin/Dashboard'
import Create from './components/admin/Create'
import Read from './components/admin/Read'
import Update from './components/admin/Update'
import Comments from './components/admin/Comments'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/admin/dashboard',
            name: 'read',
            component: Read,
            props: true
        },
        {
            path: '/admin/create',
            name: 'create',
            component: Create,
            props: true
        },
        {
            path: '/admin/update',
            name: 'update',
            component: Update,
            props: true
        },
    ],
});

const app = new Vue({
    el: '#app',
    router,
    components: { Dashboard, Comments }
});
