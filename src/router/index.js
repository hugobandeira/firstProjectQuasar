import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  });
  function isLogado() {
    try {
      const token = window.localStorage.getItem('token') || null;
      if (token == null) {
        return false;
      }
      return true;
    } catch (err) {
      window.console.error(err);
      return false;
    }
  }
  Router.beforeEach((to, from, next) => {
    switch (to.path) {
      case '/login':
        if (isLogado()) {
          return next({ path: '/' });
        }
        break;
      default:
        if (!isLogado()) {
          return next({ path: '/login' });
        }
        break;
    }
    return next();
  });

  return Router;
}
