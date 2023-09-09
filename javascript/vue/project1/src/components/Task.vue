<template>
  <div>
    <div v-if="empty">empty</div>
    <div v-if="empty == false">
      <button v-on:click="doneView" name="done">done</button>
      <button v-on:click="allView" name="all">all</button>
    </div>
    <div v-if="empty == false" id="tasks">
      <div v-for="task in array">
        <h2>{{task.title}}</h2>
        <p>{{task.description}}</p>
        <span>{{task.type}}</span>
        <div>
          <button v-on:click="doneItem(task)">{{task.completed ? 'done': 'dont'}}</button>
          <button v-on:click="deleteItem(task)">deleted</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'task-todo',
    props: {
      tasksArr: {
        type: Array
      }
    },
    data(){
      return{
        empty: true,
        array: null,
      }
    },
    created() {
      if(this.tasksArr.length > 0)this.empty = !this.empty;
      this.array = this.tasksArr
    },
    methods: {
      deleteItem: function(item){
        const filterarr = this.tasksArr.filter((object) => object.title !== item.title);
        this.array = filterarr;
        this.$emit('deleteItem',filterarr)
      },
      doneItem: function(item){
        item.completed = !item.completed;
        this.$emit('doneItems', this.tasksArr);
      },
      // ojo
      doneView: function(){
        const filterarr = this.tasksArr.filter((object) => object.completed);
        this.array = filterarr;
      },
      allView: function(){
        this.array = this.tasksArr
      }
    },
  }

</script>

<style scoped>

  #tasks {
    display: flex;
    flex-wrap: nowrap;
  }
  #tasks div {
    margin: 20px;
  }

</style>