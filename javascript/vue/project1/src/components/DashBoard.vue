<template>
  <main id="main">
    <slot name="title"></slot>
      <component  v-bind:tasksArr="tasksArr"
      @pushNewTask = "updateTaskArr($event)"
      @deleteItem = "updateTaskArr($event)"
      @doneItem = "updateTaskArr($event)" 
      v-bind:is = "tabState"
      ></component> 
  </main>
</template>

<script>

  import Task from './Task.vue';
  import Form from './Form.vue';

  export default {
    name: 'dash-todo',
    components:{
      "all": Task,
      "create": Form,
    },
    props: {
      tabState: {
        type: String,
        required: true,
      }
    },
    data(){
      return {
        tasksArr:[],
      }
    },
    methods: {
      updateTaskArr: function(arr){
        this.tasksArr = arr;
      }
    }
  }

</script>

<style scoped>

  #main {
    margin : 0 auto;
    width: 60%;
  }

</style>