// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import { store } from './store/store';
import VueRouter from 'vue-router';
import Routes from './routes/index';
export const bus = new Vue();

// route
Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes
});
/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router: router,
  render: h => h(App),
})
