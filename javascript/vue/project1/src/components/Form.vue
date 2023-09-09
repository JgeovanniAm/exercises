<template>
  <div class="wrapper">
    <form>
      <label for="name"> name</label>
      <input id="name" v-model="taskObject.title" type="text" placeholder="nombre"/>
      <label for="name">description</label>
      <textarea v-model="taskObject.description" id="description" placeholder="nombre"></textarea>
      <div>
        <label for="public">work</label>
        <input v-model="taskObject.type" type="radio" name="type" id="public" value="work" checked>
        <label for="frinds">study</label>
        <input v-model="taskObject.type" type="radio" name="type" id="friend" value="study">
        <label for="me">health</label>
        <input v-model="taskObject.type" type="radio" name="type" id="me" value="health">
      </div>
      <button v-on:click="pushNewTask">send</button>
    </form>
    <Preview v-bind:taskObject="taskObject"></Preview>
  </div>
</template>

<script>
  import Preview from './Preview.vue';

  export default {
    name: 'form-todo',
    components: {
      "Preview": Preview
    },
    props: {
      tasksArr: {
        type: Array
      }
    },
    data(){
      return {
        taskObject:{
          title: null,
          description: null,
          type: null,
        }
      }
    },
    methods: {
      pushNewTask: function(e){
        e.preventDefault();
        const arr = [...this.tasksArr, {
          title: this.taskObject.title,
          description: this.taskObject.description,
          type: this.taskObject.type,
          completed: false
        }];
        this.$emit('pushNewTask', arr);
      }
    },
  }

</script>

<style scoped>
  .wrapper {
    display: flex;
    justify-content: space-around;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 20px auto;
  }
  form div {
    margin: 20px;
  }
</style>