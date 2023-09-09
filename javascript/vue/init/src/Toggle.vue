<template>
  <ul>
    <h2 v-on:click="test">toggle list{{animals}}</h2>
    <li v-for="animal in animals" v-on:click="animal.display =!animal.display">
      <h3>{{animal.name}} </h3>
      <p v-show="animal.display">{{animal.jod}} </p>
      <p v-if="animal.display">hola</p>
    </li>
  </ul>
</template>

<script>

  /* without props export default {
    name: 'Toggle',
    data(){
      return {
        animals:[
          {name:'roger', jod:"ux", display:true},
          {name:'juan', jod:"developer", display:false},
          {name:'titaaa', jod:"tester", display:false}
        ]
      }
    }
  }*/

  /*export default {
    props: ['animals'],
    data(){
      return {
        
      }
    },
    methods: {
      test: function(){
        console.log(this.animals)
      }
    }
  }*/
  // types props
  export default {
    props:{
      animals:{
        type: Array,
        required:true
      }
    },
    data(){
      return {
        
      }
    },
    methods: {
      test: function(){
        console.log(this.animals)
      }
    }
  }
</script>