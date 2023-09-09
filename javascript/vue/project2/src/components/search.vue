<template>
  <input class="input" v-on:blur="clearInput" v-model="queryString" type="text" placeholder="search..." />
</template>

<script>
import { bus } from "../main";

export default {
  name: "search",
  data() {
    return {
      queryString: ""
    };
  },
  updated(){
    this.handleChange()
  },
  methods: {
    handleChange: function() {
      bus.$emit("handleChange", this.queryString);
    },
    clearInput: function({target}){
      this.queryString = ""
    }
  }
};
</script>

<style scoped>
.input {
  background: white;
  border-radius: 26px;
  padding: 10px;
  background: none;
  border: 2px white solid;
  display: block;
  margin: 10px auto;
  width: 120px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.input::placeholder {
  color: white;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
}
</style>