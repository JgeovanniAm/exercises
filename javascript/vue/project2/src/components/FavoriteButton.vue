<template>
  <button  v-bind:class="toggle ? 'btn-remove' : 'btn-favorite'" v-on:click="handleClick">{{toggle ? 'remove':'favorite'}}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    itemCard: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      toggle: false,
    };
  },
  created(){
    const find = this.$store.state.favorite.find(item => item.name === this.itemCard.name);
    if(find) this.toggle = true;
  },
  methods: {
    handleClick: function() {
      this.toggle = !this.toggle;
      this.toggle ? this.addFavorite( this.itemCard) : this.deleFavorite( this.itemCard);
    },
    addFavorite: function(itemCard) {
      this.$emit("addFavorite", itemCard);
    },
    deleFavorite: function(itemCard) {
      this.$emit("deleFavorite", itemCard);
    }
  }
};
</script>
<style scoped>
.btn-favorite {
  border-radius: 28px;
  background: rgb(91, 126, 223);
  color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  font-size: 18px;
  outline: none;
}
.btn-remove {
  border-radius: 28px;
  background: none;
  color: rgb(91, 126, 223);
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  font-size: 18px;
  outline: none;
}
</style>