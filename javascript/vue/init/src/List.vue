<template>
  <ul>
    <li v-for="friend in friends">{{friend}}</li>
    <Toggle v-bind:animals="animals"></Toggle>  
    change state from child to parent event
    <button v-on:click="changeTitle">changeTitle{{msg}}</button>
  </ul>
</template>

<script>
  // import jeje
  import Toggle from './Toggle.vue';
 import {bus} from './main.js';
  export default {
    name: 'ListFriend',
    components:{
      "Toggle": Toggle,
    },
    props: {
      msg:{
        type: String,
        required: true,
      }
    },
    data(){
      return {
        friends: ['hugo','pascual','manolo','manuel'],
        animals:[
          {name:'roger', jod:"ux", display:true},
          {name:'juan', jod:"developer", display:false},
          {name:'titaaa', jod:"tester", display:false}
        ]
      }
    },
    methods:{
      changeTitle: function(){ 
        //this.$emit("changeTitle","mi hijo me modificó");
        this.msg = "perro";
        bus.$emit('messageChaged', 'perro');
      }
    },
  }
</script>

// cuando uso scoped el genera un atributo my atributo y usa estos estilos solo para my compinente//

<style scoped>
h1 {
  color:blue;
}
</style>