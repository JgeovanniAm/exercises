<template>
  <div id="app">
    <h1>jimmy vuejs</h1>
    <p v-on:changeTitle="updateTitle($event)">jimmy vuejs : {{msg}} </p>
    <ListFriend v-bind:msg="msg" ></ListFriend>
  </div>
</template>

<script>
// nesting into the component 
import List from './List.vue';
import {bus} from './main.js';
export default {
  components: {
    "ListFriend": List,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    updateTitle: function(update){
      this.msg = update;
    }
  },
  created(){
    bus.$on('messageChaged', (data)=> {
      this.msg = data
    })
  }
}
</script>

<style scoped>
  h1 {
    color:red;
  }
</style>
