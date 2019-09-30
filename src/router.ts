import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/audio',
      name: 'audio',
      component: () =>
        import(/* webpackChunkName: "audio" */ './views/Audio/index.vue'),
    },
    {
      path: '/jstypeconversion',
      name: 'jstypeconversion',
      component: () =>
        import(/* webpackChunkName: "JSTypeConversion" */ './views/JSTypeConversion/index.vue'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
