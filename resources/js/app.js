/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from './components/Homepage'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import Comments from './components/Comments'

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
    components: { Homepage, Comments }
});
