<template>
  <div class="tab-wrapper">
    <button class="tab" name="all" v-on:click="handleClickTab">pokemons</button>
    <button class="tab" name="favorite" v-on:click="handleClickTab">favorite</button>
  </div>
</template>

<script>
export default {
  name: "Tab",
  data() {
    return {};
  },
  methods: {
    handleClickTab: function({target}) {
      this.$emit('handleClickTab', target.name)
    }
  }
};
</script>

<style scoped>
.tab-wrapper {
  width: 60%;
  margin: 0 auto;
}
.tab {
  border-radius: 28px;
  background: white;
  color: rgb(91, 126, 223);
  width: 130px;
  border: 0;
  box-shadow: 1px 1px 10px gray;
  padding: 10px;
  margin: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  font-size: 18px;
  outline: none;
  transition: all .5s ease-in-out;
}
.tab:hover {
  background: rgb(91, 126, 223);
  color: white;
  transition: all .5s ease-in-out;
}
</style>