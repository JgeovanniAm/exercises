<template>
  <div id="app">
    <Header v-bind:tabState="tabState" @changeStateTab="updateTab($event)"></Header>
    <DashBoard v-bind:tabState="tabState">
      <span slot="title">DashBoard</span>
    </DashBoard>
  </div>
</template>

<script>
  import HeaderC from './components/Header.vue';
  import DashBoard from './components/DashBoard.vue';

  export default {
    name: 'app',
    components: {
      "Header": HeaderC,
      "DashBoard": DashBoard,
    },
    data(){
      return {
        tabState: 'create',
      }
    },
    methods:{
      updateTab: function(target){
        this.tabState = target;
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }
</style>
