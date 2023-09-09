<template>
  <div>
    <Header class="header">
      <h1 class="title-header" slot="title">pokemon</h1>
      <Search slot="children"></Search>
    </Header>
    <Tab @handleClickTab="updateView($event)"></Tab>
    <p v-if="pokemonsData === null">loading...</p>
    <ListCard v-if="pokemonsData" v-bind:globalStateHome="state"></ListCard>
  </div>
</template>

<script>
import Header from "../components/Header";
import ListCard from "../components/ListCard";
import Tab from "../components/Tabs";
import Search from "../components/search";
import { bus } from "../main";

export default {
  name: "Home",
  components: {
    Header: Header,
    ListCard: ListCard,
    Tab: Tab,
    Search: Search
  },
  data() {
    return {
      state: {
        view:"all",
        querySearch: null,
      },
      pokemonsData: null,
    };
  },
  created() {
    this.loadData().then(result => {
      this.$store.state.pokemons = result.cards;
      this.pokemonsData = true;
    });
    // search
    bus.$on("handleChange", value => {
      const search = value;
      this.state = {...this.state, querySearch:search}
    });
  },
  methods: {
    loadData() {
      return fetch("https://api.pokemontcg.io/v1/cards").then(response => {
        return response.json();
      });
    },
    updateView: function(target) {
      this.state.view = target;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background: rgb(181, 119, 240);
  padding: 10px;
}
.header h1 {
  color: white;
  font-size: 2em;
  letter-spacing: 2px;
  padding: 10px;
  margin: 0;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
