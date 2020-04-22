import Vue from 'vue';
import VueRouter from 'vue-router';
import vSelect from 'vue-select';
import Home from '../views/Home.vue';

Vue.use(VueRouter);
Vue.component('v-select', vSelect);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:name',
    name: 'Details',
    component: () => import(/* webpackChunkName: "details" */ '../views/Details.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
