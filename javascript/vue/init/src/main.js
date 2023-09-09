import Vue from 'vue';
import App from './App.vue';
import List from './List.vue';
export const bus = new Vue();
Vue.component("ListFriend", List);

new Vue({
  el: '#app',
  render: h => h(App)
})
