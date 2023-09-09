<template>
  <header id="header">
    <h1 class="title">jimmy alvarez</h1>
    <ul class="list-tab">
      <li class="list-tab__item">
        <button v-on:click="changeStateTab" name="create" class="list-tab__button">create tasks</button>
      </li>
      <li class="list-tab__item">
        <button v-on:click="changeStateTab" name="all" class="list-tab__button">all tasks</button>
      </li>
    </ul>
  </header>
</template>

<script>

  export default {
    name: 'head-todo',
    props: {
      tabState: {
        type: String,
        required: true,
      }
    },
    methods: {
      changeStateTab: function(e){
        const target = e.target.name;
        this.$emit('changeStateTab', target); // function and new value
        //console.log(e.target.name, this.tabState)
      } 
    },
  }

</script>

<style scoped>

  #header {
    background: #2c3e50;
    margin:0;
  }

  .title {
    margin: 0;
    padding: 15px 10px 10px;
    color: white;
    font-size: 22px;
  }

  .list-tab {
    display: flex;
    padding: 20px;
    justify-content: center;
    margin: 0;
  }

</style>